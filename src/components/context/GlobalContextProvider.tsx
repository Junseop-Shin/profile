import { ReactNode, useCallback, useState } from "react";
import { GlobalContext } from "../../utils/GlobalContext";

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleTheme = useCallback(() => {
    setIsLightMode((prev) => !prev);
    document.body.className = isLightMode ? "dark" : "";
  }, [isLightMode]);

  return (
    <GlobalContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
