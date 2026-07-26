import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";

function MyReports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

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
      toast.error(
        error.response?.data?.message ||
          "Failed to load reports"
      );
    } finally {
      setLoading(false);
    }
  };

  const deleteReport = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this report?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/reports/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Report Deleted");

      setReports((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Delete Failed"
      );
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h2 className="text-2xl font-bold">
          Loading...
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen py-10">

      <div className="max-w-7xl mx-auto px-5">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold text-blue-600">
            My Reports
          </h1>

          <Link
            to="/create-report"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg"
          >
            + Create Report
          </Link>

        </div>

        {reports.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-10 text-center">

            <h2 className="text-2xl font-bold">

              No Reports Found

            </h2>

            <p className="mt-3 text-gray-500">

              You haven't submitted any report yet.

            </p>

          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg">

            <table className="w-full">

              <thead className="bg-blue-600 text-white">

                <tr>

                  <th className="p-4">Title</th>

                  <th>Category</th>

                  <th>Status</th>

                  <th>Location</th>

                  <th>Date</th>

                  <th>Actions</th>

                </tr>

              </thead>

              <tbody>

                {reports.map((report) => (

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

                      <span
                        className={`px-3 py-1 rounded-full text-sm

                        ${
                          report.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : report.status ===
                              "Approved"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }
                        `}
                      >
                        {report.status}
                      </span>

                    </td>

                    <td>

                      {report.location}

                    </td>

                    <td>

                      {new Date(
                        report.createdAt
                      ).toLocaleDateString()}

                    </td>

                    <td>

                      <div className="flex justify-center gap-4">

                        <Link
                          to={`/reports/${report._id}`}
                        >
                          <FaEye
                            className="text-blue-600"
                            size={20}
                          />
                        </Link>

                        <Link
                          to={`/reports/edit/${report._id}`}
                        >
                          <FaEdit
                            className="text-green-600"
                            size={20}
                          />
                        </Link>

                        <button
                          onClick={() =>
                            deleteReport(report._id)
                          }
                        >
                          <FaTrash
                            className="text-red-600"
                            size={20}
                          />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
}

export default MyReports;