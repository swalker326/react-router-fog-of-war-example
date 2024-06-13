import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as rootRoute from "host/root";

import { routes } from "./routes";

const router = createBrowserRouter(
  [
    {
      ...rootRoute,
      id: "root",
      path: "/",
      children: [
        {
          id: "home",
          index: true,
          lazy: () => import("host/routes/home"),
        },
        ...routes,
      ],
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
