import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FarmerType } from "@/utils/types";
import { User } from "lucide-react";
import Link from "next/link";


const farmers: (FarmerType & { id: string })[] = [
  {
    id: "dfkalsjd",
    name: "Farmer 1",
    aadhar_number: "452445244524",
    date_of_birth: new Date("1964-04-11"),
    father_name: "Father 1",
    phone_number: "+917858344559",
  },

  {
    id: "dfkal",
    name: "Farmer 2",
    aadhar_number: "524452445244",
    date_of_birth: new Date("1990-04-11"),
    father_name: "Father 2",
    phone_number: "+917834455958",
  },
  {
    id: "dkal",
    name: "Farmer 3",
    aadhar_number: "446444644464",

    date_of_birth: new Date("1999-04-11"),
    father_name: "Father 3",
    phone_number: "+917854559959",
  },
];

export default function Page() {
  return (
    <section className=" h-screen w-screen bg-[#f4d8bf]">
      <div
        style={{
          background: 'url("/images/tree1.png")',
       
          backgroundPosition: 'center 70px', // Center the image
          backgroundRepeat: 'no-repeat',
            filter: 'brightness(70%)',
        }}>

     
        <h1 className="text-3xl mb-8 text-center rounded-sm p-3 font-sans font-semibold ">Communities</h1>
        <div className="flex justify-center space-x-8">
      <Card className="w-96 pr-5 ml-10 py-10 bg-[#cb8f56] bg-opacity-35 backdrop-blur-md rounded-lg shadow-lg shadow-[#cb8f56] transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#c08854] hover:bg-opacity-30">

      <Link href="/community/National Farmers Union">
   
        <CardHeader>
       
          <h2 id="small-cards-title">
            <p className=" text-center text-xl font-bold font-sans ">
              The National Farmers Union (NFU) 
          </p>
          </h2>
            <CardDescription className="text-center text-black font-semibold">
            The National Farmers Union advocates for family farmers, promoting
            sustainable agriculture, fair markets, and rural community
            well-being.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col justify-center items-centertext-center text-center font-bold">
          <div className="border-t border-gray-700 w-full my-2"></div>
              <h3 className="text-lg font-semibold  text-[#c37833]">Location</h3>
       
              <div className="border-t border-gray-700 w-full my-2"></div>
              <p>
    District:
    <span className="text-sm text-[#c37833] "> Varanasi</span>
  </p>
  <p>
    State:{" "}
    <span className="text-sm text-[#c37833] ">Uttar Pradesh</span>
  </p>
  <p>
    Pincode:
    <span className="text-sm text-[#c37833] "> 221010</span>
  </p>
          </div>
          <div className="flex justify-center items-center text-center mt-6 space-x-4">
         
  <button className="bg-[#de914e] p-2 rounded-md font-semibold text-l hover:translate-y-1 hover:bg-[#cb8f56] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
    Join Community
  </button>
  
</div>
          </CardContent>
          </Link>
        </Card>

        {/* ...........................Second card.................. */}

        <Card className="w-96 pr-5 ml-10 py-10 bg-[#cb8f56] bg-opacity-35 backdrop-blur-md rounded-lg shadow-lg shadow-[#cb8f56] transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#c08854] hover:bg-opacity-30">

<Link href="/community/National Farmers Union">

  <CardHeader>
 
    <h2 id="small-cards-title">
      <p className=" text-center text-xl font-bold font-sans ">
        The National Farmers Union (NFU) 
    </p>
    </h2>
      <CardDescription className="text-center text-black font-semibold">
      The National Farmers Union advocates for family farmers, promoting
      sustainable agriculture, fair markets, and rural community
      well-being.
    </CardDescription>
  </CardHeader>

  <CardContent>
    <div className="flex flex-col justify-center items-centertext-center text-center font-bold">
    <div className="border-t border-gray-700 w-full my-2"></div>
        <h3 className="text-lg font-semibold  text-[#c37833]">Location</h3>
 
        <div className="border-t border-gray-700 w-full my-2"></div>
        <p>
District:
<span className="text-sm text-[#c37833] "> Varanasi</span>
</p>
<p>
State:{" "}
<span className="text-sm text-[#c37833] ">Uttar Pradesh</span>
</p>
<p>
Pincode:
<span className="text-sm text-[#c37833] "> 221010</span>
</p>
    </div>
    <div className="flex justify-center items-center text-center mt-6 space-x-4">
   
<button className="bg-[#de914e] p-2 rounded-md font-semibold text-l hover:translate-y-1 hover:bg-[#cb8f56] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
Join Community
</button>

</div>
    </CardContent>
    </Link>
          </Card>
          
          </div>
        
        </div>
    </section>
  );
}
