import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import SignIn from "../Pages/SignInPage/SignIn";
import SignUp from "../Pages/SignUpPage/SignUp";
import Order from "../Pages/Order/Order/Order";
import PrivetRoute from "./PrivetRoute";
import DashBoard from "../Layout/Dasboard/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import AllUsers from "../Layout/Dasboard/AllUsers/AllUsers";
import AddItems from "../Layout/Dasboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/DashBoard/Cart/ManageItems/ManageItems";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'menu',
                element:<PrivetRoute><Menu></Menu></PrivetRoute>
            },
            {
                path:'signin',
                element:<SignIn></SignIn>
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            },
            {
                path:'order/:category',
                element:<Order></Order>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
        children:[
            // normal user route 
            {
                path:'cart',
                element:<Cart></Cart>
            },
            // admin routes
            {
                path:'addItems',
                element:<AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path:'manageItems',
                element:<ManageItems></ManageItems>
            },
            {
                path:'updateItem/:id',
                element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader:({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path:'users',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
])