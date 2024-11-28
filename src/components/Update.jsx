import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, photo, supplier, price, category } = coffee;
  const navigate = useNavigate();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    // Gather updated values from the form
    const updatedCoffee = {
      name: form.name.value,
      chef: form.chef.value,
      photo: form.photo.value,
      supplier: form.supplier.value,
      price: form.price.value,
      category: form.category.value,
    };

    // Send updated coffee data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error updating coffee:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to update coffee. Please try again later.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl mt-8">
        <a href="/" className="text-black text-xl font-medium hover:underline">
          Back to home
        </a>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mt-8">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Update Coffee
        </h1>
        <form
          onSubmit={handleUpdateCoffee}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="col-span-1">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter coffee name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Chef */}
          <div className="col-span-1">
            <label className="label">
              <span className="label-text font-bold">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              defaultValue={chef}
              placeholder="Enter coffee chef"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Supplier */}
          <div className="col-span-1">
            <label className="label">
              <span className="label-text font-bold">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Price */}
          <div className="col-span-1">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Enter coffee price"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div className="col-span-1">
            <label className="label">
              <span className="label-text font-bold">Category</span>
            </label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Enter coffee category"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Photo */}
          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="btn btn-primary bg-[#d2b48c] text-black hover:bg-[#b09b7d] w-full"
            >
              Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
