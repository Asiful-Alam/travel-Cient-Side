import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = () => {
  const [bd, setBd] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/bd')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBd(data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div>
            <h2>Country:{bd.country_name}</h2>
        </div>
        <div className="p-4">
          {bd.map(bd => (
            <div key={bd._id.$oid}>
              <h3 className="text-lg font-semibold mb-2">{bd.place_name}</h3>
              <p className="text-gray-600 mb-4">{bd.details}</p>
              <p className="text-gray-600 mb-4">{bd.currency}</p>
              <p className="text-gray-600 mb-4">{bd.population}</p>
              <Link to='/'>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
