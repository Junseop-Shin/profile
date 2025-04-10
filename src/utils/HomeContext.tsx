import { createContext } from "react";

// Context 타입 정의
interface HomeContextType {
  currentSection: string;
}

export const HomeContext = createContext<HomeContextType | undefined>(
  undefined
);
