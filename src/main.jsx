import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Rouets.jsx";
import { HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <div className=" mx-auto max-w-screen-xl">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </StrictMode>
);
