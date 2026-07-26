import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUsers,
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [reports, setReports] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userRes = await axios.get(
        "http://localhost:5000/api/admin/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const reportRes = await axios.get(
        "http://localhost:5000/api/admin/reports",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(userRes.data.users);
      setReports(reportRes.data.reports);
    } catch (error) {
      console.log(error);
    }
  };

  const totalUsers = users.length;
  const totalReports = reports.length;

  const pending = reports.filter(
    (item) => item.status === "Pending"
  ).length;

  const approved = reports.filter(
    (item) => item.status === "Approved"
  ).length;

  const rejected = reports.filter(
    (item) => item.status === "Rejected"
  ).length;

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          Admin Dashboard
        </h1>

        {/* Statistics */}

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">

          <div className="bg-white rounded-xl shadow-lg p-6">

            <FaUsers className="text-5xl text-blue-600" />

            <h2 className="text-4xl font-bold mt-4">
              {totalUsers}
            </h2>

            <p className="text-gray-500">
              Total Users
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">

            <FaClipboardList className="text-5xl text-purple-600" />

            <h2 className="text-4xl font-bold mt-4">
              {totalReports}
            </h2>

            <p className="text-gray-500">
              Total Reports
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">

            <FaClock className="text-5xl text-yellow-500" />

            <h2 className="text-4xl font-bold mt-4">
              {pending}
            </h2>

            <p className="text-gray-500">
              Pending
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">

            <FaCheckCircle className="text-5xl text-green-600" />

            <h2 className="text-4xl font-bold mt-4">
              {approved}
            </h2>

            <p className="text-gray-500">
              Approved
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">

            <FaTimesCircle className="text-5xl text-red-600" />

            <h2 className="text-4xl font-bold mt-4">
              {rejected}
            </h2>

            <p className="text-gray-500">
              Rejected
            </p>

          </div>

        </div>

        {/* Quick Menu */}

        <div className="mt-12">

          <h2 className="text-2xl font-bold mb-5">
            Quick Menu
          </h2>

          <div className="flex flex-wrap gap-5">

            <Link
              to="/admin/users"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Manage Users
            </Link>

            <Link
              to="/admin/reports"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Manage Reports
            </Link>

          </div>

        </div>

        {/* Recent Reports */}

        <div className="mt-12 bg-white rounded-xl shadow-lg">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">
              Latest Reports
            </h2>

          </div>

          <table className="w-full">

            <thead className="bg-blue-600 text-white">

              <tr>

                <th className="p-4">Title</th>

                <th>Category</th>

                <th>Status</th>

                <th>User</th>

              </tr>

            </thead>

            <tbody>

              {reports.slice(0, 6).map((report) => (

                <tr
                  key={report._id}
                  className="border-b text-center"
                >

                  <td className="p-4">
                    {report.title}
                  </td>

                  <td>
                    {report.category}
                  </td>

                  <td>
                    {report.status}
                  </td>

                  <td>
                    {report.reportedBy?.name}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;