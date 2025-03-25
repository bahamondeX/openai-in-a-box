"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }: any) {
  // Initialize theme from localStorage if available
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme-preference");
    if (
      savedTheme &&
      (savedTheme === "light" ||
        savedTheme === "dark" ||
        savedTheme === "system")
    ) {
      const themeChangeEvent = new CustomEvent("themeChange", {
        detail: { theme: savedTheme },
      });
      window.dispatchEvent(themeChangeEvent);
    }
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

