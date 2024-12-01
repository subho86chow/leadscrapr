"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Laptop } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="sm"
      className={`${
        theme === "system" || resolvedTheme === "system" ? "bg-gray-100/80 dark:bg-gray-800/80" : ""
      }`}
      onClick={() => setTheme("system")}
    >
      {theme === "light" ? <Laptop/> : <Laptop/>}
    </Button>
  );
}