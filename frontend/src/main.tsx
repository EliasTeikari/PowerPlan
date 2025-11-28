import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Push from "./pages/Push.tsx";
import Pull from "./pages/Pull.tsx";
import Legs from "./pages/Legs.tsx";
import Arms from "./pages/Arms.tsx";

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/push", element: <Push /> },
    { path: "/pull", element: <Pull /> },
    { path: "/legs", element: <Legs /> },
    { path: "/arms", element: <Arms /> },
    { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
