import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../Pages/Home/HomePage/HomePage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProperties from "../Pages/AllProperties/AllProperties";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProfile from "../Pages/Dashboard/RightSideContent/MyProfile/MyProfile";
import Wishlist from "../Pages/Dashboard/RightSideContent/WishList/WshList";
import PropertyBrought from "../Pages/Dashboard/RightSideContent/propertyBrought/propertyBrought";
import ReviewsPage from "../Pages/Dashboard/RightSideContent/ReviewsPage/ReviewsPage";
import AddProperty from "../Pages/Dashboard/RightSideContent/AddProperty/AddProperty";
import AddedProperties from "../Pages/Dashboard/RightSideContent/AddedProperties/AddedProperties";
import SoldProperties from "../Pages/Dashboard/RightSideContent/SoldProperties/SoldProperties";
import RequestedProperties from "../Pages/Dashboard/RightSideContent/RequestedProperties/RequestedProperties";


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
                path:'/allProperties',
                element:<AllProperties></AllProperties>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'myProfile',
                element:<MyProfile></MyProfile>
            },
            {
                path:'wishList',
                element:<Wishlist></Wishlist>
            },
            {
                path:'propertyBrought',
                element:<PropertyBrought></PropertyBrought>
            },
            {
                path:'reviews',
                element:<ReviewsPage></ReviewsPage>
            },
            {
                path:'addProperty',
                element:<AddProperty></AddProperty>
            },
            {
                path:'myAddedProperties',
                element:<AddedProperties></AddedProperties>
            },
            {
                path:'soldProperties',
                element:<SoldProperties></SoldProperties>
            },
            {
                path:'requestedProperties',
                element:<RequestedProperties></RequestedProperties>
            }

        ]
    }
])
   

export default Router;