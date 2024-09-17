import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Script from "next/script";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <head></head>
      <body className="bg-background text-foreground overflow-x-hidden ">
        <Script
          src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"
          strategy="afterInteractive" // Load after the page is interactive
        />
        <Script
          src="https://mediafiles.botpress.cloud/974b2644-7598-4dce-a6ea-774e5cac35d3/webchat/v2.1/config.js"
          strategy="afterInteractive"
        />
        {/*
      <body className="bg-background text-foreground overflow-x-hidden">
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <Link href={"/"}>Next.js Supabase Starter</Link>
                    <div className="flex items-center gap-2">
                      <DeployButton />
                    </div>
                  </div>
                  {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                </div>
              </nav>
              <div className="">{children}</div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                <p>
                  Powered by{" "}
                  <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    Supabase
                  </a>
                </p>
                <ThemeSwitcher />
              </footer>
            </div>
          </main>
         */}
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        > */}
        {children}
        {/* </ThemeProvider> */}
        <Footer />
      </body>
    </html>
  );
}
