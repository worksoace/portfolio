import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface ColorModeContextType {
  isColorMode: boolean;
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextType>({
  isColorMode: false,
  toggleColorMode: () => {},
});

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [isColorMode, setIsColorMode] = useState<boolean>(() => {
    return localStorage.getItem("color-mode") === "true";
  });

  useEffect(() => {
    if (isColorMode) {
      document.documentElement.classList.add("color-mode");
      localStorage.setItem("color-mode", "true");
    } else {
      document.documentElement.classList.remove("color-mode");
      localStorage.setItem("color-mode", "false");
    }
  }, [isColorMode]);

  const toggleColorMode = () => {
    setIsColorMode((prev) => !prev);
  };

  return (
    <ColorModeContext.Provider value={{ isColorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  return useContext(ColorModeContext);
}
