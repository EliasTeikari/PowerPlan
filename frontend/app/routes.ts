import { type RouteConfig, index } from "@react-router/dev/routes";
import Home from "./routes/home";
import Root from "./root";

export default [index("routes/home.tsx")] satisfies RouteConfig;
