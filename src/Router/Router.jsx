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
import PrivateRoutes from "../Components/PrivateRoutes/PrivateRoutes";
import AgentRoutes from "../Components/AgentRoutes/AgentRoutes";
import AdminRoutes from "../Components/AdminRoutes/AdminRoutes";
import UpdateProperty from "../Pages/Dashboard/RightSideContent/AgentRoutes/UpdateProperty/UpdateProperty";
import Details from "../Pages/Details/Details";
import OfferForm from "../Pages/Dashboard/RightSideContent/UsersRoutes/offerForm/OfferForm";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AdvertiseProperty from "../Pages/Dashboard/RightSideContent/AdminRoutes/AdvertiseProperty/AdvertiseProperty";
import Payment from "../Pages/Dashboard/RightSideContent/UsersRoutes/Payment/Payment";
import ContactUs from "../Pages/ContactUs/ContactUs";
import DashboardOverview from "../Pages/Dashboard/RightSideContent/DashboardOverview/DashboardOverview";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/allProperties',
                element:<PrivateRoutes><AllProperties></AllProperties></PrivateRoutes> 
            },
            {
                path:'/contact',
                element:<ContactUs></ContactUs>
            },
            {
                path:'privacy',
                element:<PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}property/${params.id}`)
            },
           
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'wishList',
                element: <Wishlist></Wishlist>
            },
            {
                path: 'offerForm/:id',
                element: <PrivateRoutes><OfferForm></OfferForm></PrivateRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}singleWishlist/${params.id}`)
            },
            {
                path: 'propertyBrought',
                element: <PropertyBrought></PropertyBrought>
            },
            {

                path: 'payment/:id',
                element: <PrivateRoutes><Payment></Payment></PrivateRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}singleOffered/${params.id}`)

            },
            {
                path: 'reviews',
                element: <ReviewsPage></ReviewsPage>
            },
            {
                path:'overview',
                element:<DashboardOverview></DashboardOverview>
            },
            {
                path: 'addProperty',
                element: <AgentRoutes><AddProperty></AddProperty></AgentRoutes>
            },
            {
                path: 'myAddedProperties',
                element: <AgentRoutes><AddedProperties></AddedProperties></AgentRoutes>
            },
            {
                path: 'soldProperties',
                element: <AgentRoutes><SoldProperties></SoldProperties></AgentRoutes>
            },
            {
                path: 'requestedProperties',
                element: <AgentRoutes><RequestedProperties></RequestedProperties></AgentRoutes>
            },
            {
                path: 'updateProperties/:id',
                element: <AgentRoutes><UpdateProperty></UpdateProperty></AgentRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}property/${params.id}`)
            },
            {
                path: 'manageProperties',
                element: <AdminRoutes><ManagePropertis></ManagePropertis></AdminRoutes>
            },
            {
                path: 'advertise',
                element: <AdminRoutes><AdvertiseProperty></AdvertiseProperty></AdminRoutes>
            },
            {
                path: 'manageUsers',
                element: <AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
            },
            {
                path: 'manageReviews',
                element: <AdminRoutes><ManageReviews></ManageReviews></AdminRoutes>
            }

        ]
    }
])


export default Router;