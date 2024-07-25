"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <FiMoon
        className="w-8 h-8  cursor-pointer border border-neutral-600 p-2 rounded-full"
        onClick={() => setTheme("dark")}
      />
    );

  if (resolvedTheme === "light")
    return (
      <FiMoon
        className="w-8 h-8  cursor-pointer border border-neutral-600 p-2 rounded-full"
        onClick={() => setTheme("dark")}
      />
    );

  return (
    <FiSun
      className="w-8 h-8  cursor-pointer border border-neutral-600 p-2 rounded-full"
      onClick={() => setTheme("light")}
    />
  );
}
