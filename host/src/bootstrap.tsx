import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "remote/routes";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    }
  ],
  {
    future: {
      v7_normalizeFormMethod: true
    },
    unstable_patchRoutesOnMiss(path, matches, patch) {
      patch(null, routes);
    }
  }
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
