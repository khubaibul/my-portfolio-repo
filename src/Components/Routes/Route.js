import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layouts/Main";
import ComingSoon from "../Shared/ComingSoon";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/resume",
                element: <ComingSoon />
            },
            {
                path: "/photography",
                element: <ComingSoon />
            },
            {
                path: "/contact",
                element: <ComingSoon />
            }
        ]
    }
])