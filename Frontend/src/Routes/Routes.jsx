import Add from "../Pages/Admin/Add/Add";
import AdminRoot from "../Pages/Admin/AdminRoot";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import Basket from "../Pages/Site/Basket/Basket";
import Details from "../Pages/Site/Details/Details";
import Home from "../Pages/Site/Home/Home";
import SiteRoot from "../Pages/Site/SiteRoot";
import Wishlist from "../Pages/Site/Wishlist/Wishlist";

const ROUTES = [
    {
        path: "/",
        element: <SiteRoot />,
        children: [
            {
                path: "",
                element: <Home />

            },
            {
                path: "wishlist",
                element: <Wishlist />
            },
            {
                path: "details/:id",
                element: <Details />
            },
            {
                path: "basket",
                element: <Basket/>
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminRoot />,
        children: [
            {
            path: "",
            element: <Dashboard />

        },
        {
            path: "add",
            element: <Add />

        }

        ]
    }
]
export default ROUTES