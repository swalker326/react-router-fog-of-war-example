import { Suspense, lazy } from "react";
import React from "react";
import { json } from "react-router-dom";

export const routes = [
  {
    path: "/remote",
    loader: () => {
      return json({data: "some data"})
    },
    lazy: async () => {
      return { Component: (await import("./App")).default };
    }
  }
];
