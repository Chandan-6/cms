"use client";

import { ThemeProvider } from "next-themes";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </div>
  );
}
