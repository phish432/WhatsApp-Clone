import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const mountPoint = document.getElementById("mount");

if (!mountPoint) {
  throw new Error("Mount point not found");
}

createRoot(mountPoint).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
