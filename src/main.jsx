import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Rouets.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


// Create a client for TanStack
const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
        <div className=" mx-auto max-w-screen-xl">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </QueryClientProvider>

    </AuthProvider>
  </StrictMode>
);
