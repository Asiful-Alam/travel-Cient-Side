import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TouristSpot = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/countries')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCountries(data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {countries.map(country => (
        <div key={country._id.$oid} className="bg-white p-4 rounded-md shadow-md">
          <img src={country.image_url} alt={country.country_name} className="w-full h-40 object-cover mb-4 rounded-md" />
          <h3 className="text-lg font-semibold mb-2">{country.country_name}</h3>
          <p className="text-gray-600 mb-4">{country.details}</p>
         <Link to='/countrydetails'>
         <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">View Details</button>
         </Link>
        </div>
      ))}
    </div>
  );
};

export default TouristSpot;
