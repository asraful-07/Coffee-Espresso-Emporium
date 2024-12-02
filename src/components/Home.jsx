import React, { useState } from "react";
import AddCoffee from "./AddCoffee";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import CoffeeList from "./CoffeeList";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <CoffeeList />
      <h1 className="text-2xl font-bold">hot coffee: {coffees.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coffees.map((coffee, idx) => (
          <CoffeeCard
            key={idx}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
      <AddCoffee />
    </div>
  );
};

export default Home;
