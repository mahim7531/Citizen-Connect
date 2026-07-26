import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CreateReport() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const reportData = {
        title: data.title,
        category: data.category,
        description: data.description,
        location: data.location,
        latitude: Number(data.latitude),
        longitude: Number(data.longitude),
        image: data.image,
      };

      const res = await axios.post(
        "http://localhost:5000/api/reports",
        reportData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message);

      reset();

      navigate("/my-reports");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to create report"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600">
          Create New Report
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Report any environmental or community problem.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 mt-8"
        >

          {/* Title */}

          <div>

            <label className="font-semibold">
              Report Title
            </label>

            <input
              type="text"
              placeholder="Road Damage"
              {...register("title", {
                required: "Title is required",
              })}
              className="w-full border rounded-lg p-3 mt-2"
            />

            <p className="text-red-500 text-sm">
              {errors.title?.message}
            </p>

          </div>

          {/* Category */}

          <div>

            <label className="font-semibold">
              Category
            </label>

            <select
              {...register("category", {
                required: "Category is required",
              })}
              className="w-full border rounded-lg p-3 mt-2"
            >

              <option value="">Select Category</option>

              <option>Road Damage</option>

              <option>Garbage</option>

              <option>Drainage</option>

              <option>Flood</option>

              <option>Street Light</option>

              <option>Water Logging</option>

              <option>Open Manhole</option>

              <option>Mentally Disordered Person</option>

              <option>Other</option>

            </select>

            <p className="text-red-500 text-sm">
              {errors.category?.message}
            </p>

          </div>

          {/* Description */}

          <div>

            <label className="font-semibold">
              Description
            </label>

            <textarea
              rows="5"
              placeholder="Describe the issue..."
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full border rounded-lg p-3 mt-2"
            />

            <p className="text-red-500 text-sm">
              {errors.description?.message}
            </p>

          </div>

          {/* Location */}

          <div>

            <label className="font-semibold">
              Location
            </label>

            <input
              type="text"
              placeholder="Rangpur"
              {...register("location", {
                required: "Location is required",
              })}
              className="w-full border rounded-lg p-3 mt-2"
            />

          </div>

          {/* Latitude */}

          <div>

            <label className="font-semibold">
              Latitude
            </label>

            <input
              type="number"
              step="any"
              placeholder="25.7439"
              {...register("latitude")}
              className="w-full border rounded-lg p-3 mt-2"
            />

          </div>

          {/* Longitude */}

          <div>

            <label className="font-semibold">
              Longitude
            </label>

            <input
              type="number"
              step="any"
              placeholder="89.2752"
              {...register("longitude")}
              className="w-full border rounded-lg p-3 mt-2"
            />

          </div>

          {/* Image URL */}

          <div>

            <label className="font-semibold">
              Image URL
            </label>

            <input
              type="text"
              placeholder="https://..."
              {...register("image")}
              className="w-full border rounded-lg p-3 mt-2"
            />

          </div>

          {/* Submit */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
          >

            {loading
              ? "Submitting..."
              : "Submit Report"}

          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateReport;