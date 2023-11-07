import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Index from "./pages/Index.tsx";

import { ThemeProvider } from "@/utils/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Index />
    </ThemeProvider>
  </React.StrictMode>,
);

