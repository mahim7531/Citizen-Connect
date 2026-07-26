

import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import Dashboard from "../pages/Dashboard/Dashboard";

import CreateReport from "../pages/Reports/CreateReport";
import AllReports from "../pages/Reports/AllReports";
import ReportDetails from "../pages/Reports/ReportDetails";
import MyReports from "../pages/Reports/MyReports";

import AdminDashboard from "../pages/Admin/AdminDashboard";
import ManageUsers from "../pages/Admin/ManageUsers";
import ManageReports from "../pages/Admin/ManageReports";

import NotFound from "../pages/Error/NotFound";

import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";


const router = createBrowserRouter([
    {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },

    {
      path: "login",
      element: <Login />,
    },

    {
      path: "register",
      element: <Register />,
    },

    {
      path: "reports",
      element: <AllReports />,
    },

    {
      path: "reports/:id",
      element: <ReportDetails />,
    },
  ],
},

{
  path: "/",
  element: <DashboardLayout />,
  children: [

    {
      path: "dashboard",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
    },

    {
      path: "create-report",
      element: (
        <PrivateRoute>
          <CreateReport />
        </PrivateRoute>
      ),
    },

    {
      path: "my-reports",
      element: (
        <PrivateRoute>
          <MyReports />
        </PrivateRoute>
      ),
    },

  ],
},

{
  path: "/admin",
  element: <AdminLayout />,
  children: [

    {
      path: "dashboard",
      element: (
        <AdminRoute>
          <AdminDashboard />
        </AdminRoute>
      ),
    },

    {
      path: "users",
      element: (
        <AdminRoute>
          <ManageUsers />
        </AdminRoute>
      ),
    },

    {
      path: "reports",
      element: (
        <AdminRoute>
          <ManageReports />
        </AdminRoute>
      ),
    },

  ],
},

{
  path: "*",
  element: <NotFound />,
},
]);

export default router;