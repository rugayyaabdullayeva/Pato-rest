import Root from "../pages/client/Root";
import Home from "../pages/client/Home";
import Menu from "../pages/client/Menu";
import Reservation from "../pages/client/Reservation";
import Gallery from "../pages/client/Gallery";
import About from "../pages/client/About";
import Blog from "../pages/client/Blog";
import Contact from "../pages/client/Contact";
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard";
import Product from "../pages/admin/Product";
import Order from "../pages/admin/Order";

export const ROUTES = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
            },
            {
                path: "/reservation",
                element: <Reservation />,
            },
            {
                path: "/gallery",
                element: <Gallery />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
    {
        path:"/admin",
        element: <AdminRoot/>,
        children: [
            {
                path:"",
                element: <Dashboard/>,
            },
            {
                path:"order",
                element: <Order/>,
            },
            {
                path:"product",
                element: <Product/>,
            },
        
        ],
    },
    
]