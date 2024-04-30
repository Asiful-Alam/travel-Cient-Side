import { useState } from "react";
import { Link } from "react-router-dom";

const TourPackages = () => {
  // Define initial state for tour packages and expanded status
  const [packages, setPackages] = useState([
    { id: 1, name: "City Explorer", duration: "3 days", price: "$500" },
    { id: 2, name: "Beach Getaway", duration: "5 days", price: "$800" },
    { id: 3, name: "Mountain Adventure", duration: "7 days", price: "$1200" },
  ]);
  const [expanded, setExpanded] = useState(null);

  // Function to toggle expand/collapse state
  const toggleExpand = (id) => {
    setExpanded((prevExpanded) => (prevExpanded === id ? null : id));
  };

  return (
    <div className="container mx-auto ">
      <h2 className="text-2xl font-semibold mb-4 text-red-400 text-center mt-10">Tour Packages</h2>
      <p className="text-gray-600 text-center font-xl ">Here you can book you next tour seats</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {packages.map((pkg) => (
          <div key={pkg.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2 ">
              <h3 className="text-lg font-semibold">{pkg.name}</h3>
              <button
                className="text-blue-500 focus:outline-none"
                onClick={() => toggleExpand(pkg.id)}
              >
                {expanded === pkg.id ? (
                  <img src="path-to-minus-image" alt="Collapse" /> // Replace "path-to-minus-image" with the actual path to your minus image
                ) : (
                  <img src="path-to-plus-image" alt="Expand" /> // Replace "path-to-plus-image" with the actual path to your plus image
                )}
              </button>
            </div>
            <p className="text-gray-600 mb-2">Duration: {pkg.duration}</p>
            <p className="text-gray-600 mb-4">Price: {pkg.price}</p>
            {expanded === pkg.id && (
              <div className="bg-gray-100 p-2 rounded">
                {/* Include customizable itinerary options here */}
                <p className="text-sm text-gray-600">
                  Customize your itinerary:
                </p>
                {/* Example: Allow users to select activities or add-ons */}
                <ul className="list-disc pl-4">
                  <li>Day 1: City tour</li>
                  <li>Day 2: Visit museums</li>
                  <li>Day 3: Free time</li>
                </ul>
              </div>
            )}
            {/* Add button to book the tour */}
           <Link to='/bookingsystem'>
           <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
              Book Now
            </button>
           </Link>

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPackages;
