import Navbar from "./Header/Navbar"
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

const routes = [
    {
        id:1,
        path: "/",
        component: Navbar,
    },

    {
        id:2,
        path: "/about",
        component: About,
    },

    {
        id:3,
        path: "/portfolio",
        component: Portfolio,
    },

    {
        id:4,
        path: "/contact",
        component: Contact,
    },
]

export default routes
