import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";

function AllReports() {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/reports"
      );

      setReports(res.data.reports);
      setFilteredReports(res.data.reports);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let data = [...reports];

    if (search) {
      data = data.filter((report) =>
        report.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (category) {
      data = data.filter(
        (report) => report.category === category
      );
    }

    setFilteredReports(data);
  }, [search, category, reports]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">

        <h2 className="text-2xl font-bold">

          Loading...

        </h2>

      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen py-10">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="mb-10 text-center">

          <h1 className="text-4xl font-bold text-blue-600">

            All Reports

          </h1>

          <p className="text-gray-500 mt-3">

            Browse all reported community problems.

          </p>

        </div>

        {/* Search */}

        <div className="grid md:grid-cols-2 gap-5 mb-10">

          <div className="relative">

            <FaSearch
              className="absolute left-4 top-4 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search Report..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full border rounded-lg py-3 pl-12"
            />

          </div>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="border rounded-lg py-3 px-4"
          >

            <option value="">
              All Categories
            </option>

            <option value="Road Damage">
              Road Damage
            </option>

            <option value="Garbage">
              Garbage
            </option>

            <option value="Flood">
              Flood
            </option>

            <option value="Street Light">
              Street Light
            </option>

            <option value="Open Manhole">
              Open Manhole
            </option>

            <option value="Water Logging">
              Water Logging
            </option>

            <option value="Mentally Disordered Person">
              Mentally Disordered Person
            </option>

          </select>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredReports.length === 0 && (
            <h2 className="text-center col-span-3 text-gray-500">

              No Reports Found

            </h2>
          )}

          {filteredReports.map((report) => (

            <div
              key={report._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >

              <img
                src={
                  report.image ||
                  "/placeholder.png"
                }
                alt={report.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold">

                  {report.title}

                </h2>

                <p className="mt-3 text-gray-600 line-clamp-3">

                  {report.description}

                </p>

                <div className="mt-4 flex items-center gap-2">

                  <FaMapMarkerAlt
                    className="text-red-500"
                  />

                  {report.location}

                </div>

                <div className="flex justify-between items-center mt-6">

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">

                    {report.category}

                  </span>

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

                </div>

                <button
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                >

                  View Details

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default AllReports;