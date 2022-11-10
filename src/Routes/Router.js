import { createBrowserRouter } from "react-router-dom";
import AddReview from "../components/AddReview/AddReview";
import AddService from "../components/AddService/AddService";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import MyReviews from "../components/MyReviews/MyReviews";
import Register from "../components/Register/Register";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Services from "../components/Services/Services";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch("https://assignment-11-server-rouge.vercel.app/services")
            },
            {
                path:"/services",
                element:<Services></Services>,
                // loader:()=>fetch("https://assignment-11-server-rouge.vercel.app/services")
            },
            {
                path:"/services/:id",
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`https://assignment-11-server-rouge.vercel.app/services/${params.id}`)
            },
            {
                path:"/blog",
                element:<Blog></Blog>,
                
            },
            {
                path:"/login",
                element:<LogIn></LogIn>,
                
            },
            {
                path:"/register",
                element:<Register></Register>,
                
            },
            {
                path:"/myreviews",
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
                
            },
            {
                path:"/yourService",
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            }
            
        ]
    }
])