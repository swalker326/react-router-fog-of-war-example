import { routes as RemoteOneRoutes } from "remote/routes";
import { routes as RemoteTwoRoutes } from "remotetwo/routes";
import { routes as DashboardRoutes } from "dashboard/routes";

export const routeManifest = [...RemoteOneRoutes, ...RemoteTwoRoutes, ...DashboardRoutes];
