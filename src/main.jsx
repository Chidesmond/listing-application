import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/index.css";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./contexts/contextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <App />
          <ReactQueryDevtools />
        </ContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
