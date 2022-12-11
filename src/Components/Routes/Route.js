import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home/Home";
import Main from "../Layouts/Main";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import Resume from "../Resume/Resume";
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
                element: <Resume />
            },
            {
                path: "/blogs",
                element: <ComingSoon />
            },
            {
                path: "/photography",
                element: <ComingSoon />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/project-details/:_id",
                element: <ProjectDetails />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
])