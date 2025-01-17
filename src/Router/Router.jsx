import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../Pages/Home/HomePage/HomePage";
import Login from "../Pages/Login/Login";


const Router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<HomePage></HomePage>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])
   

export default Router;