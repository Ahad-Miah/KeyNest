import { Outlet } from "react-router-dom";
import Drawer from "../../Components/Drawer/Drawer";
import LeftSide from "./LeftSide/LeftSide";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {

    const Sidebar = <>
        <LeftSide></LeftSide>
    </>
    return (
        <div className="min-h-screen m-6 lg:grid lg:grid-cols-12 gap-4">
            <Helmet>
                <title>Dashboard || KeyNest</title>
            </Helmet>
            <div className="lg:col-span-3">
                <div className="hidden lg:block">
                    <LeftSide></LeftSide>
                </div>
                <div className="lg:hidden">
                    <Drawer links={Sidebar}></Drawer>
                </div>
            </div>
            <div className="lg:col-span-9 border mt-5 lg:mt-0 border-blue-900">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;