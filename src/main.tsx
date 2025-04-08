import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./components/common/GlobalContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </BrowserRouter>
  </StrictMode>
);
