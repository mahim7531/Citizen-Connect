import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaUser,
  FaCalendarAlt,
  FaTag,
  FaArrowLeft,
} from "react-icons/fa";

function ReportDetails() {
  const { id } = useParams();

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/reports/${id}`
      );

      setReport(res.data.report);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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

  if (!report) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h2 className="text-2xl font-bold text-red-600">
          Report Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen py-10">

      <div className="max-w-6xl mx-auto px-5">

        <Link
          to="/reports"
          className="inline-flex items-center gap-2 text-blue-600 mb-6"
        >
          <FaArrowLeft />
          Back to Reports
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          {/* Image */}

          <img
            src={
              report.image || "/placeholder.png"
            }
            alt={report.title}
            className="w-full h-[450px] object-cover"
          />

          <div className="p-8">

            {/* Title */}

            <h1 className="text-4xl font-bold">

              {report.title}

            </h1>

            {/* Status */}

            <div className="mt-5">

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold

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

            </div>

            {/* Information */}

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              <div className="flex items-center gap-3">

                <FaTag className="text-blue-600" />

                <div>

                  <h4 className="font-bold">
                    Category
                  </h4>

                  <p>{report.category}</p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <FaMapMarkerAlt className="text-red-600" />

                <div>

                  <h4 className="font-bold">
                    Location
                  </h4>

                  <p>{report.location}</p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <FaUser className="text-green-600" />

                <div>

                  <h4 className="font-bold">
                    Reported By
                  </h4>

                  <p>
                    {report.reportedBy?.name || "Citizen"}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <FaCalendarAlt className="text-purple-600" />

                <div>

                  <h4 className="font-bold">
                    Created At
                  </h4>

                  <p>
                    {new Date(
                      report.createdAt
                    ).toLocaleDateString()}
                  </p>

                </div>

              </div>

            </div>

            {/* Description */}

            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-4">

                Description

              </h2>

              <p className="text-gray-600 leading-8">

                {report.description}

              </p>

            </div>

            {/* Coordinates */}

            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-4">

                Coordinates

              </h2>

              <div className="bg-slate-100 rounded-lg p-5">

                <p>

                  <strong>Latitude :</strong>

                  {" "}
                  {report.latitude || "N/A"}

                </p>

                <p className="mt-2">

                  <strong>Longitude :</strong>

                  {" "}
                  {report.longitude || "N/A"}

                </p>

              </div>

            </div>

            {/* Action Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg">

                Edit Report

              </button>

              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">

                Delete Report

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ReportDetails;