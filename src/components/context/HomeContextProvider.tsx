import { ReactNode } from "react";
import useCurrentSection from "../../hooks/useCurrentSection";
import { sectionIds } from "../../assets/header";
import { HomeContext } from "../../utils/HomeContext";

export const HomeContextProvider = ({ children }: { children: ReactNode }) => {
  const currentSection = useCurrentSection(sectionIds);

  return (
    <HomeContext.Provider value={{ currentSection }}>
      {children}
    </HomeContext.Provider>
  );
};
