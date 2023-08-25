import { createBrowserRouter } from "react-router-dom";

import SignUp from "./views/signup";
import Login from "./views/login";
import Users from "./views/Users";
import Dashboard from "./views/Dashboard";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/users" />,
            },
            {
                path: "./users",
                element: <Users />,
            },
            {
                path: "./dashboard",
                element: <Dashboard />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "./login",
                element: <Login />,
            },
            {
                path: "./signup",
                element: <SignUp />,
            },
        ],
    },

    {
        path: "./users",
        element: <Users />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
