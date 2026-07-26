import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  FaSearch,
  FaEye,
  FaCheck,
  FaTimes,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function ManageReports() {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchReports();
  }, []);

  useEffect(() => {
    const data = reports.filter(
      (report) =>
        report.title.toLowerCase().includes(search.toLowerCase()) ||
        report.location.toLowerCase().includes(search.toLowerCase()) ||
        report.category.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredReports(data);
  }, [search, reports]);

  const fetchReports = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/reports",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setReports(res.data.reports);
      setFilteredReports(res.data.reports);
    } catch (error) {
      toast.error("Failed to load reports");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(
        `http://localhost:5000/api/admin/reports/${id}/status`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Status Updated");

      fetchReports();
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  const deleteReport = async (id) => {
    if (!window.confirm("Delete this report?")) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/admin/reports/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Report Deleted");

      fetchReports();
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          Manage Reports
        </h1>

        {/* Search */}

        <div className="relative mb-8">

          <FaSearch className="absolute left-4 top-4 text-gray-500" />

          <input
            type="text"
            placeholder="Search Report..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg py-3 pl-12"
          />

        </div>

        {/* Table */}

        <div className="bg-white rounded-xl shadow-lg overflow-x-auto">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">

              <tr>

                <th className="p-4">Image</th>

                <th>Title</th>

                <th>Category</th>

                <th>Location</th>

                <th>User</th>

                <th>Status</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {filteredReports.map((report) => (

                <tr
                  key={report._id}
                  className="border-b text-center"
                >

                  <td className="p-3">

                    <img
                      src={
                        report.image ||
                        "/placeholder.png"
                      }
                      alt=""
                      className="w-16 h-16 object-cover rounded-lg mx-auto"
                    />

                  </td>

                  <td>{report.title}</td>

                  <td>{report.category}</td>

                  <td>{report.location}</td>

                  <td>
                    {report.reportedBy?.name}
                  </td>

                  <td>

                    <span
                      className={`px-3 py-1 rounded-full text-sm

                      ${
                        report.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : report.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }

                      `}
                    >

                      {report.status}

                    </span>

                  </td>

                  <td>

                    <div className="flex justify-center gap-2">

                      <Link
                        to={`/reports/${report._id}`}
                        className="bg-blue-600 text-white p-2 rounded"
                      >
                        <FaEye />
                      </Link>

                      <button
                        onClick={() =>
                          updateStatus(
                            report._id,
                            "Approved"
                          )
                        }
                        className="bg-green-600 text-white p-2 rounded"
                      >
                        <FaCheck />
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(
                            report._id,
                            "Rejected"
                          )
                        }
                        className="bg-yellow-500 text-white p-2 rounded"
                      >
                        <FaTimes />
                      </button>

                      <button
                        onClick={() =>
                          deleteReport(report._id)
                        }
                        className="bg-red-600 text-white p-2 rounded"
                      >
                        <FaTrash />
                      </button>

                    </div>

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

export default ManageReports;