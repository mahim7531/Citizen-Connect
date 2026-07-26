import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaUserPlus } from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        userData
      );

      toast.success(res.data.message);

      reset();

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-5 py-10">

      <div className="bg-white shadow-xl rounded-xl w-full max-w-lg p-8">

        <div className="flex justify-center mb-4">
          <FaUserPlus className="text-5xl text-blue-600" />
        </div>

        <h1 className="text-3xl font-bold text-center text-blue-600">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join CitizenConnect Today
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 mt-8"
        >

          {/* Name */}

          <div>

            <label className="font-semibold">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              {...register("name", {
                required: "Name is required",
              })}
              className="w-full mt-2 border rounded-lg p-3 outline-none focus:border-blue-600"
            />

            <p className="text-red-500 text-sm mt-1">
              {errors.name?.message}
            </p>

          </div>

          {/* Email */}

          <div>

            <label className="font-semibold">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full mt-2 border rounded-lg p-3 outline-none focus:border-blue-600"
            />

            <p className="text-red-500 text-sm mt-1">
              {errors.email?.message}
            </p>

          </div>

          {/* Password */}

          <div>

            <label className="font-semibold">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                className="w-full mt-2 border rounded-lg p-3 outline-none focus:border-blue-600"
              />

              <button
                type="button"
                className="absolute right-4 top-6"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            <p className="text-red-500 text-sm mt-1">
              {errors.password?.message}
            </p>

          </div>

          {/* Confirm Password */}

          <div>

            <label className="font-semibold">
              Confirm Password
            </label>

            <div className="relative">

              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password ||
                    "Passwords do not match",
                })}
                className="w-full mt-2 border rounded-lg p-3 outline-none focus:border-blue-600"
              />

              <button
                type="button"
                className="absolute right-4 top-6"
                onClick={() =>
                  setShowConfirm(!showConfirm)
                }
              >
                {showConfirm ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword?.message}
            </p>

          </div>

          {/* Register Button */}

          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {loading
              ? "Creating Account..."
              : "Register"}
          </button>

        </form>

        <p className="text-center mt-6">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 font-semibold ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;