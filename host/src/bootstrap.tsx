import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as rootRoute from "./root";

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
          lazy: () => import("./routes/home"),
        },
      ],
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
    },
    async unstable_patchRoutesOnMiss(path, _matches, patch) {
      if (path.startsWith("/remote")) {
        const { routes } = await import("remote/routes");
        patch("root", routes);
      }
      // TODO: Add more remotes here
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
