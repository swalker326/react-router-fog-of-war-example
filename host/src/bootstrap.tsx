import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeManifest } from "./routeManifest";
import { Layout } from "./Layout";

const router = createBrowserRouter(
  [
    {
      id: "root",
      path: "/",
      Component: () => <Layout />,
      children: [
        {
          index: true,
          element: <App />
        }
      ]
    }
  ],
  {
    future: {
      v7_normalizeFormMethod: true
    },
    unstable_patchRoutesOnMiss(_path, _matches, patch) {
      patch("root", routeManifest);
    }
  }
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
