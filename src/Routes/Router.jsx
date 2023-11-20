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
            {
                path:'cart',
                element:<Cart></Cart>
            },
            // admin routes
            {
                path:'users',
                element:<AllUsers></AllUsers>
            }
        ]
    }
])