import { useContext } from "react";
import { GlobalContext } from "../utils/GlobalContext";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobal must be used within a GlobalProvider");
  return context;
};
