import { ReactNode, useCallback, useState } from "react";
import { GlobalContext } from "../utils/GlobalContext";
import useCurrentSection from "../hooks/useCurrentSection";
import { sectionIds } from "../assets/header";

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLightMode, setIsLightMode] = useState(true);
  const currentSection = useCurrentSection(sectionIds);

  const toggleTheme = useCallback(() => {
    setIsLightMode((prev) => !prev);
    document.body.className = isLightMode ? "dark" : "";
  }, [isLightMode]);

  return (
    <GlobalContext.Provider
      value={{ isLightMode, toggleTheme, currentSection }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
