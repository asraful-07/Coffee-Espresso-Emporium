import React, { useState, useEffect } from "react";
import CoffeeCard from "./CoffeeCard";

const CoffeeList = () => {
  const [coffees, setCoffees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch coffee data with optional search query
    fetch(`http://localhost:5000/coffee?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => setCoffees(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search coffee by name..."
          className="border rounded-lg px-4 py-2 "
          value={search}
          onChange={handleSearch}
        />
      </div>

      {/* Coffee Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </div>
  );
};

export default CoffeeList;
