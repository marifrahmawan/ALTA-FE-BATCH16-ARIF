import React from "react";
import ReactDOM from "react-dom/client";

import "@/styles/index.css";
import Index from "@/pages/Index";

import { TokenProvider } from "./utils/contexts/token";
import { ThemeProvider } from "@/utils/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TokenProvider>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Index />
      </ThemeProvider>
    </TokenProvider>
  </React.StrictMode>,
);
