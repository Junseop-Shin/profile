import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

// Context 타입 정의
interface GlobalContextType {
  isLightMode: boolean;
  toggleTheme: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleTheme = useCallback(() => {
    setIsLightMode((prev) => !prev);
  }, []);

  return (
    <GlobalContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobal must be used within a GlobalProvider");
  return context;
};
