import { useContext } from "react";
import { HomeContext } from "../utils/HomeContext";

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) throw new Error("useHome must be used within a HomeProvider");
  return context;
};
