import type { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/remote",
    lazy: () => import("./routes/remote"),
    children: [
      {
        index: true,
        lazy: () => import("./routes/remote.index"),
      },
      {
        path: "nested-remote-link",
        lazy: () => import("./routes/remote.nested-remote-link"),
      },
    ],
  },
];
