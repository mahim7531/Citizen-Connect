import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  FaSearch,
  FaTrash,
  FaUserShield,
  FaUser,
} from "react-icons/fa";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const result = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredUsers(result);
  }, [search, users]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(res.data.users);
      setFilteredUsers(res.data.users);
    } catch (error) {
      toast.error("Failed to load users");
    }
  };

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/admin/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("User Deleted");

      setUsers((prev) =>
        prev.filter((user) => user._id !== id)
      );
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-blue-700 mb-8">

          Manage Users

        </h1>

        {/* Search */}

        <div className="relative mb-8">

          <FaSearch className="absolute left-4 top-4 text-gray-500" />

          <input
            type="text"
            placeholder="Search user..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border rounded-lg py-3 pl-12"
          />

        </div>

        {/* Table */}

        <div className="bg-white rounded-xl shadow-lg overflow-x-auto">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">

              <tr>

                <th className="p-4">

                  #

                </th>

                <th>

                  Name

                </th>

                <th>

                  Email

                </th>

                <th>

                  Role

                </th>

                <th>

                  Action

                </th>

              </tr>

            </thead>

            <tbody>

              {filteredUsers.map((user, index) => (

                <tr
                  key={user._id}
                  className="border-b text-center"
                >

                  <td className="p-4">

                    {index + 1}

                  </td>

                  <td>

                    {user.name}

                  </td>

                  <td>

                    {user.email}

                  </td>

                  <td>

                    {user.role === "admin" ? (

                      <span className="flex justify-center items-center gap-2 text-green-600">

                        <FaUserShield />

                        Admin

                      </span>

                    ) : (

                      <span className="flex justify-center items-center gap-2">

                        <FaUser />

                        User

                      </span>

                    )}

                  </td>

                  <td>

                    <button
                      onClick={() =>
                        deleteUser(user._id)
                      }
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    >

                      <FaTrash />

                    </button>

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

export default ManageUsers;