import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <Toaster position="top-center" />
    <App />
  </StrictMode>
);
