import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../Pages/Home/HomePage/HomePage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProperties from "../Pages/AllProperties/AllProperties";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProfile from "../Pages/Dashboard/RightSideContent/MyProfile/MyProfile";
import Wishlist from "../Pages/Dashboard/RightSideContent/UsersRoutes/WishList/WshList";
import PropertyBrought from "../Pages/Dashboard/RightSideContent/UsersRoutes/propertyBrought/propertyBrought";
import ReviewsPage from "../Pages/Dashboard/RightSideContent/UsersRoutes/ReviewsPage/ReviewsPage";
import AddProperty from "../Pages/Dashboard/RightSideContent/AgentRoutes/AddProperty/AddProperty";
import AddedProperties from "../Pages/Dashboard/RightSideContent/AgentRoutes/AddedProperties/AddedProperties";
import SoldProperties from "../Pages/Dashboard/RightSideContent/AgentRoutes/SoldProperties/SoldProperties";
import RequestedProperties from "../Pages/Dashboard/RightSideContent/AgentRoutes/RequestedProperties/RequestedProperties";
import ManagePropertis from "../Pages/Dashboard/RightSideContent/AdminRoutes/ManagePropertise/ManagePropertise";
import ManageUsers from "../Pages/Dashboard/RightSideContent/AdminRoutes/ManageUsers/ManageUsers";
import ManageReviews from "../Pages/Dashboard/RightSideContent/AdminRoutes/ManageReviews/ManageReviews";


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
            },
            {
                path:'manageProperties',
                element:<ManagePropertis></ManagePropertis>
            },
            {
                path:'manageUsers',
                element:<ManageUsers></ManageUsers>
            },
            {
                path:'manageReviews',
                element:<ManageReviews></ManageReviews>
            }

        ]
    }
])
   

export default Router;