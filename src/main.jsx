import "aos/dist/aos.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AnimCursor from "./pages/AnimCursor/AnimCursor.jsx";
import router from "./routes/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div>
        <AnimCursor></AnimCursor>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
