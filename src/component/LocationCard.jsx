import React from 'react';
import { Link } from 'react-router-dom';

const LocationCard = ({ location }) => {
  return (
    <div className="max-w-lg mx-auto mb-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
        <img
          src={location.image}
          alt={location.tourists_spot_name}
          className="w-full h-64 object-cover object-center rounded-t-lg"
        />
        <div className="p-6">
          <h2 className="text-gray-900 font-bold text-xl mb-2">
            {location.tourists_spot_name}
          </h2>
          <p className="text-gray-600 mb-4">{location.short_description}</p>
          <div className="flex justify-between items-center gap-10">
            <div className="text-gray-700">
              <p className="font-semibold">
                <span className="text-gray-600 font-bold">Country:</span> {location.country_name}
              </p>
              <p className="font-semibold">
                <span className="text-gray-600">Total Visitors:</span> {location.total_visitors_per_year}
              </p>
            </div>
            <div className="text-gray-700 ">
              <p className="font-semibold">
                <span className="text-gray-600">Average Cost:</span> {location.average_cost}
              </p>
              {/* <p className="font-semibold">
                <span className="text-gray-600">Seasonality:</span> {location.seasonality}
              </p> */}
            </div>
          </div>
          <div className="mt-4">
            <Link to={`/details/${location._id}`} state={{ location }}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
