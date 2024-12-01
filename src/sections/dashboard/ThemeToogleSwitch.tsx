"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function ThemeToggleSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait for client-side rendering to ensure theme is set
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative inline-flex h-8 w-16 items-center rounded-full bg-white border dark:bg-black transition-colors focus:outline-none"
      aria-label="Toggle Theme"
    >
      <span
        className={`absolute left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-all ${
          theme === "dark" ? "translate-x-8" : "translate-x-0"
        }${ theme === "system" ? "translate-x-0 dark:translate-x-8" : ""}`}
      >

        {theme === "system" ? (
            <>
             <Moon className="hidden dark:block h-4 w-4 text-black" />
             <Sun className="dark:hidden h-4 w-4" />
            </>
            ) : theme === "dark" ? (
            <Moon className="h-4 w-4 text-black" />
            ) : (
            <Sun className="h-4 w-4 text-black" />)
        }
      </span>
    </button>
  );
}