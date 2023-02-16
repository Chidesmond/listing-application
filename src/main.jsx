import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { ContextProvider } from "./contexts/contextProvider";
import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
