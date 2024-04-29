import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = () => {
  const [bd, setCountries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/bd')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCountries(data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {bd.map(bd => (
          <div key={bd._id.$oid} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={bd.image} alt={bd.country_name} className="w-full h-48 object-cover object-center" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{bd.country_Name}</h2>
              <p className="text-gray-600 mb-2"><span className="font-semibold">Tourist Spot:</span> {bd.tourists_spot_name}</p>
              <p className="text-gray-600 mb-2"><span className="font-semibold">Location:</span> {bd.location}</p>
              <p className="text-gray-600 mb-2"><span className="font-semibold">Short Description:</span> {bd.short_description}</p>
              <p className="text-gray-600 mb-2"><span className="font-semibold">Average Cost:</span> {bd.average_cost}</p>
              <p className="text-gray-600 mb-2"><span className="font-semibold">Seasonality:</span> {bd.seasonality}</p>
              <Link to={`/bd/${bd._id.$oid}`}>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryDetails;
