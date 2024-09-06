import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.tsx";
import "./index.css";

createRoot(document.getElementById("mount")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
