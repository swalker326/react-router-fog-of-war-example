import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { dependencies } from "./package.json";

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3001
  },
  moduleFederation: {
    options: {
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./MicroFrontend": "./src/App",
        "./routes": "./src/routes"
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies.react
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"]
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: dependencies["react-router-dom"]
        }
      }
    }
  }
});
