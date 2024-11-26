import React from "react";

const AddCoffee = () => {
  // Function to handle form submission
  const handelAssCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    // Extract values from input fields
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    // Create an object to represent the coffee details
    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // For demonstration: Log the coffee object to the console
    console.log("New Coffee Details:", newCoffee);

    // Clear the form fields after submission
    form.reset();

    // Optionally, you can send `newCoffee` to an API or handle it as required
    // https://haircutinspiration.com/wp-content/uploads/Teen-with-High-Fade-and-Curly-Fringe.jpg
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Back to Home Link */}
      <div className="w-full max-w-4xl mt-8">
        <a href="/" className="text-blue-500 hover:underline">
          Back to home
        </a>
      </div>

      {/* Add Coffee Form */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mt-8">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Add New Coffee
        </h1>
        <p className="text-gray-600 text-center mt-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form
          onSubmit={handelAssCoffee}
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
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Taste */}
          <div className="col-span-1">
            <label className="label">
              <span className="label-text font-bold">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
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
              placeholder="Enter coffee category"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Details */}
          <div className="col-span-1">
            <label className="label">
              <span className="label-text font-bold">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
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
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="btn btn-primary bg-brown-500 hover:bg-brown-700 w-full"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
