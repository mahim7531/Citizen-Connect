import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaClipboardList,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Dashboard() {
  const [reports, setReports] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/users/my-reports",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setReports(res.data.reports);
    } catch (error) {
      console.log(error);
    }
  };

  const total = reports.length;

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

        {/* Welcome */}

        <div className="bg-blue-600 text-white rounded-xl p-8 mb-10">

          <h1 className="text-4xl font-bold">

            Welcome to CitizenConnect

          </h1>

          <p className="mt-3 text-lg">

            Report community problems and help make your city better.

          </p>

        </div>

        {/* Statistics */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

          <div className="bg-white rounded-xl shadow-lg p-6">

            <FaClipboardList
              className="text-5xl text-blue-600"
            />

            <h2 className="text-4xl font-bold mt-4">

              {total}

            </h2>

            <p className="text-gray-500 mt-2">

              Total Reports

            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">

            <FaClock
              className="text-5xl text-yellow-500"
            />

            <h2 className="text-4xl font-bold mt-4">

              {pending}

            </h2>

            <p className="text-gray-500 mt-2">

              Pending

            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">

            <FaCheckCircle
              className="text-5xl text-green-600"
            />

            <h2 className="text-4xl font-bold mt-4">

              {approved}

            </h2>

            <p className="text-gray-500 mt-2">

              Approved

            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">

            <FaTimesCircle
              className="text-5xl text-red-600"
            />

            <h2 className="text-4xl font-bold mt-4">

              {rejected}

            </h2>

            <p className="text-gray-500 mt-2">

              Rejected

            </p>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="mt-12">

          <h2 className="text-2xl font-bold mb-5">

            Quick Actions

          </h2>

          <div className="flex flex-wrap gap-5">

            <Link
              to="/create-report"
              className="bg-blue-600 text-white px-6 py-4 rounded-lg flex items-center gap-3 hover:bg-blue-700"
            >

              <FaPlus />

              Create Report

            </Link>

            <Link
              to="/my-reports"
              className="bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700"
            >

              My Reports

            </Link>

            <Link
              to="/reports"
              className="bg-purple-600 text-white px-6 py-4 rounded-lg hover:bg-purple-700"
            >

              All Reports

            </Link>

          </div>

        </div>

        {/* Recent Reports */}

        <div className="mt-12">

          <h2 className="text-2xl font-bold mb-6">

            Recent Reports

          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <table className="w-full">

              <thead className="bg-blue-600 text-white">

                <tr>

                  <th className="p-4">

                    Title

                  </th>

                  <th>

                    Category

                  </th>

                  <th>

                    Status

                  </th>

                  <th>

                    Date

                  </th>

                </tr>

              </thead>

              <tbody>

                {reports.slice(0, 5).map((report) => (

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

                      {new Date(
                        report.createdAt
                      ).toLocaleDateString()}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;