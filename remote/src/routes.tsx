import { RouteObject, json } from "react-router-dom";
const ErrorComponent = () => {
  return (
    <div>Something Broke In Remote, whoops</div>
  )
}

export const routes: RouteObject[] = [
  {
    path: "remote",
    loader: () => {
      return json({ data: "some data" });
    },
    errorElement: <ErrorComponent />,

    lazy: async () => {
      return { Component: (await import("./App")).default, };
    },
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("./routes/index")).default
        })
      },
      {
        path: "nested-remote-link",
        lazy: async () => ({ Component: (await import("./NestedApp")).default })
      }
    ]
  }
];
