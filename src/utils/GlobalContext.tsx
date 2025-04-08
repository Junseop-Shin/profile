import { createContext } from "react";

// Context 타입 정의
interface GlobalContextType {
  isLightMode: boolean;
  toggleTheme: () => void;
  currentSection: string;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);
