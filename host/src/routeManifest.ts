import { routes as RemoteOneRoutes } from "remote/routes";
import { routes as RemoteTwoRoutes } from "remotetwo/routes";

export const routeManifest = [...RemoteOneRoutes, ...RemoteTwoRoutes];
