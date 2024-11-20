import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "./index.css";
import App from "./App.tsx";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Tema de PrimeReact
import "primereact/resources/primereact.min.css"; // Estilos de componentes
import "primeflex/primeflex.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
