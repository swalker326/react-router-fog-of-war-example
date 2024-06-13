import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { dependencies } from "./package.json";

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3000,
  },
  moduleFederation: {
    options: {
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remote: "remote@http://localhost:3001/remoteEntry.js",
      },
      exposes: {
        "./root": "./src/root",
        "./routes/home": "./src/routes/home",
      },
      shared: {
        ...dependencies,

        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: dependencies["react-router-dom"],
        },
      },
    },
  },
});
