import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GeistSans } from "geist/font/sans";
import Provider from "./providers";

// ... rest of your code
export const metadata: Metadata = {
  title: "Blog ULTRA",
  description: "an initiative by theAnanta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark:bg-black dark:text-white ${GeistSans.className}`} suppressHydrationWarning>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
