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
  isMenuOpened: boolean;
  toggleTheme: () => void;
  toggleMenu: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLightMode, setIsLightMode] = useState(true);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsLightMode((prev) => !prev);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpened((prev) => !prev);
  }, []);

  return (
    <GlobalContext.Provider
      value={{ isLightMode, toggleTheme, isMenuOpened, toggleMenu }}
    >
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
