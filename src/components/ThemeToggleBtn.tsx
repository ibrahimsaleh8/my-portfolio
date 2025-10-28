"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import {
  ThemeToggler,
  type ThemeSelection,
  type Resolved,
  type Direction,
} from "@/components/animate-ui/primitives/effects/theme-toggler";

interface ThemeTogglerDemoProps {
  direction: Direction;
}

export const ThemeToggleBtn = ({ direction }: ThemeTogglerDemoProps) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  return (
    <ThemeToggler
      theme={theme as ThemeSelection}
      resolvedTheme={resolvedTheme as Resolved}
      setTheme={setTheme}
      direction={direction}>
      {({ effective, toggleTheme }) => {
        const nextTheme = effective === "dark" ? "light" : "dark";

        return (
          <button
            className="cursor-pointer"
            aria-label="theme toggler"
            onClick={() => toggleTheme(nextTheme)}>
            {effective === "dark" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        );
      }}
    </ThemeToggler>
  );
};
