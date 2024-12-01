import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Users = () => {
  const loadUser = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      // Refresh the UI or refetch data after deletion
      alert("User deleted successfully");
      window.location.reload();
    } catch (err) {
      console.error("Error deleting user:", err.message);
    }
  };

  const handleEdit = (id) => {
    // Navigate to the edit page for this user
    navigate(`/users/edit/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <div className="grid gap-4">
        {loadUser && loadUser.length > 0 ? (
          loadUser.map((user) => (
            <div
              key={user._id}
              className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>
                  Created:{" "}
                  <span className="text-gray-600">
                    {new Date(user.create).toLocaleString()}
                  </span>
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(user._id)}
                  className="btn btn-sm bg-blue-500 text-white hover:bg-blue-700 px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-sm bg-red-500 text-white hover:bg-red-700 px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Users;
