import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Provider from "./providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

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
      <body
        className={`dark:bg-black dark:text-white ${plusJakartaSans.className}`}
        suppressHydrationWarning
      >
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
