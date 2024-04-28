import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import LocationCard from "../component/LocationCard";
import NavBar from "../component/NavBar";

const TouristsSpot = () => {
  
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedLocations, setSortedLocations] = useState([]);
  
  const locations = useLoaderData();

  const sortLocationsByCost = (order) => {
    const sorted = [...locations].sort((a, b) => {
      if (order === "asc") {
        return a.average_cost - b.average_cost;
      } else {
        return b.average_cost - a.average_cost;
      }
    });
    setSortedLocations(sorted);
  };

  useEffect(() => {
    sortLocationsByCost(sortOrder);
  }, [sortOrder, locations]);

  return (
    <div>
      <NavBar />
      <div className="flex justify-center mb-4">
  <select
    className="p-2 rounded border text-lg bg-blue-100 text-blue-900"
    value={sortOrder}
    onChange={(e) => {
      setSortOrder(e.target.value);
    }}
  >
    <option value="asc">Low to High</option>
    <option value="desc">High to Low</option>
  </select>
</div>

      <div className="grid grid-cols-3 gap-6">
        {(sortedLocations.length ? sortedLocations : locations).map(
          (location) => (
            <LocationCard key={location._id} location={location} />
          )
        )}
      </div>
    </div>
  );
};

export default TouristsSpot;
