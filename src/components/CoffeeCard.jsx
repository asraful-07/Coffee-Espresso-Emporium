import React from "react";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, photo, supplier, price, category } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          // Remove the deleted coffee from the state
          const remaining = coffees.filter((cof) => cof._id !== _id);
          setCoffees(remaining);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container mx-auto">
      <div className="border border-gray-200 rounded-lg shadow-lg p-4 w-64 h-80 flex flex-col items-center bg-white">
        {/* Coffee Image */}
        <img
          src={photo}
          alt={name}
          className="w-32 h-32 object-cover rounded-lg shadow-md"
        />

        {/* Coffee Details */}
        <div className="mt-4 text-center">
          <h3 className="font-bold text-lg text-gray-800">{name}</h3>
          <p className="text-gray-600 text-sm">Chef: {chef}</p>
          <p className="text-gray-600 text-sm">Category: {category}</p>
          <p className="font-semibold text-black mt-2">{price || "890 Taka"}</p>
          <p className="font-semibold text-black mt-2">
            {supplier || "890 Taka"}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex justify-between w-full">
          <Link to={`/updateCoffee/${_id}`}>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded-md shadow-md flex items-center">
              <span className="material-icons">edit</span>
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-100 hover:bg-red-200 text-red-800 px-3 py-2 rounded-md shadow-md flex items-center"
          >
            <span className="material-icons">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
