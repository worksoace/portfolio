import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface ColorModeContextType {
  isColorMode: boolean;
  toggleColorMode: () => void;
  isDarkMode: boolean;
}

const ColorModeContext = createContext<ColorModeContextType>({
  isColorMode: false,
  toggleColorMode: () => {},
  isDarkMode: false,
});

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme-mode") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark", "color-mode");
      localStorage.setItem("theme-mode", "dark");
    } else {
      document.documentElement.classList.remove("dark", "color-mode");
      localStorage.setItem("theme-mode", "light");
    }
  }, [isDarkMode]);

  const toggleColorMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ColorModeContext.Provider
      value={{
        isColorMode: isDarkMode,
        isDarkMode,
        toggleColorMode,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  return useContext(ColorModeContext);
}
