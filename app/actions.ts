"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { BuyerType, FarmerType } from "@/utils/types";

//export const signUpAction = async (formData: FormData) => {
//  const email = formData.get("email")?.toString();
//  const password = formData.get("password")?.toString();
//  const supabase = createClient();
//  const origin = headers().get("origin");
//
//  if (!email || !password) {
//    return { error: "Email and password are required" };
//  }
//
//  const { error } = await supabase.auth.signUp({
//    email,
//    password,
//    options: {
//      emailRedirectTo: `${origin}/auth/callback`,
//    },
//  });
//
//  if (error) {
//    console.error(error.code + " " + error.message);
//    return encodedRedirect("error", "/sign-up", error.message);
//  } else {
//    return encodedRedirect(
//      "success",
//      "/sign-up",
//      "Thanks for signing up! Please check your email for a verification link.",
//    );
//  }
//};

//export const signInAction = async (formData: FormData) => {
//  const email = formData.get("email") as string;
//  const password = formData.get("password") as string;
//  const supabase = createClient();
//
//  const { error } = await supabase.auth.signInWithPassword({
//    email,
//    password,
//  });
//
//  if (error) {
//    return encodedRedirect("error", "/sign-in", error.message);
//  }
//
//  return redirect("/protected");
//};
export const phoneAction = async (formData: FormData) => {
  const supabase = createClient();
  const phone = formData.get("phone")?.toString();
  if (!phone) return;
  const { data, error } = await supabase.auth.signInWithOtp({ phone: phone });
  console.log(data);
  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }
  return encodedRedirect(
    "success",
    "/sign-in",
    "Verification Code will be send within 60 seconds.",
    phone,
  );
};
export const verifyOTP = async (formData: FormData, phone: string) => {
  const supabase = createClient();
  //TODO: Resolved very soon
  const token = formData.get("otp")?.toString();
  if (!token) return;
  const {
    data: { session },
    error,
  } = await supabase.auth.verifyOtp({
    phone: phone,
    token: token,
    type: "sms",
  });
  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }
  const { data, error: GetUser } = await supabase
    .from("users")
    .select()
    .eq("id", session!.user.id)
    .single();
  if (data) {
    return redirect("/dashboard");
  }
  return redirect("/onboarding");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = createClient();
  const origin = headers().get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password",
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password.",
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password and confirm password are required",
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Passwords do not match",
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password update failed",
    );
  }

  encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/");
};

export const checkFirstCome = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/sign-in");
  }
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("id", user.id)
    .single();
  console.log(data);
  if (data) {
    return { response: false };
  }
  return { response: true };
};

export const createFarmerData = async (farmer: FarmerType) => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/sign-in");
  }
  const { data: userData, error: FarmerStatusError } = await supabase
    .from("users")
    .insert({ id: user.id, status: "farmer" })
    .select()
    .single();
  if (FarmerStatusError) {
    console.error(FarmerStatusError);
    return { error: FarmerStatusError };
  }
  const { error: FarmerCreationError } = await supabase.from("Farmer").insert({
    aadhar_number: farmer.aadhar_number,
    date_of_birth: farmer.date_of_birth.toUTCString(),
    id: user.id,
    name: farmer.name,
    father_name: farmer.father_name,
    phone_number: farmer.phone_number,
  });
  if (FarmerCreationError) {
    await supabase.from("users").delete().eq("id", userData.id);
    console.error(FarmerCreationError);
    return { error: FarmerCreationError };
  }
  return { error: null };
};
export const createBuyerData = async (buyer: BuyerType) => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/sign-in");
  }
  const { data: userData, error: BuyerStatusError } = await supabase
    .from("users")
    .insert({ id: user.id, status: "buyer" })
    .select()
    .single();
  if (BuyerStatusError) {
    console.error(BuyerStatusError);
    return { error: BuyerStatusError };
  }
  const response = await fetch(
    `https://api.postalpincode.in/pincode/${buyer.pincode}`,
  );
  const PincodeData = await response.json();
  if (PincodeData[0].Status !== "Success") {
    return { error: { message: "Invalid Pincode" } };
  }
  const { error: BuyerCreationError } = await supabase.from("Buyers").insert({
    address: buyer.address,
    district: buyer.district,
    email: buyer.email,
    gstin: buyer.gstin,
    id: user.id,
    pincode: buyer.pincode,
    state: buyer.state,
  });
  if (BuyerCreationError) {
    await supabase.from("users").delete().eq("id", userData.id);
    console.error(BuyerCreationError);
    return { error: BuyerCreationError };
  }
  return { error: null };
};

export async function getUserStatus() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/sign-in");
  }
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("id", user.id)
    .single();
  return { data, error };
}

export async function getUserInfo(type: string) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/sign-in");
  }
  if (type === "farmer") {
    const { data, error } = await supabase
      .from("Farmer")
      .select()
      .eq("id", user.id)
      .single();
    return { data, error };
  }

  const { data, error } = await supabase
    .from("Buyers")
    .select()
    .eq("id", user.id)
    .single();
  return { data, error };
}
