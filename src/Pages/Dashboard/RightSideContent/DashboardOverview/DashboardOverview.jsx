import React, { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { FaHome, FaUsers, FaDollarSign, FaClock } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";

const DashboardOverview = () => {

    const {user}=useContext(AuthContext);
    const {data: role}=useQuery({
        queryKey: ['role',user?.email],
  queryFn: async () => {
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}user/role/${user?.email}`)
    return data.role;
  },
    })
  // Sample data
  const stats = {
    totalProperties: 120,
    totalSales: "$1.2M",
    activeUsers: 85,
    pendingApprovals: 10,
  };

  const salesData = [
    { name: "Jan", sales: 30 },
    { name: "Feb", sales: 50 },
    { name: "Mar", sales: 80 },
    { name: "Apr", sales: 40 },
    { name: "May", sales: 90 },
  ];

  const userDistribution = [
    { name: "Buyers", value: 400 },
    { name: "Sellers", value: 300 },
    { name: "Agents", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Dashboard Overview</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<FaHome />} title="Total Properties" value={stats.totalProperties} color="bg-blue-500" />
        <StatCard icon={<FaDollarSign />} title="Total Sales" value={stats.totalSales} color="bg-green-500" />
        {
            role==="admin"&& <StatCard icon={<FaUsers />} title="Active Users" value={stats.activeUsers} color="bg-yellow-500" />
        }
        {role === "admin" && <StatCard icon={<FaClock />} title="Pending Approvals" value={stats.pendingApprovals} color="bg-red-500" />}
      </div>
      
      {/* Charts Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sales Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Monthly Sales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#4CAF50" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* User Distribution Pie Chart */}
        {
            role==="admin" && <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">User Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={userDistribution} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
                  {userDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        }
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value, color }) => (
  <div className={`p-6 rounded-lg shadow-md flex items-center gap-4 ${color} text-white`}>
    <div className="text-3xl">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

export default DashboardOverview;
