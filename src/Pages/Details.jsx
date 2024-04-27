import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation().state.location;

  return (
    <div>
      <h2>{location.tourists_spot_name}</h2>
      <div className="w-full p-4">
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={location.image}
              alt={location.tourists_spot_name}
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-gray-800 font-bold text-2xl mb-2">
                {location.tourists_spot_name}
              </h2>
              <p className="text-gray-600 font-semibold">{location.short_description}</p>
              <div className="mt-3 flex justify-between">
                <div>
                  <p className="text-gray-700">
                    <span className="text-gray-700 font-bold">Country: </span>
                    {location.country_name}
                  </p>
                  <p className="text-gray-700">
                    <span className="text-gray-700 font-bold">Total Visitors: </span>
                    {location.total_visitors_per_year}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="text-gray-700 font-bold">Average Cost: </span>{' '}
                    {location.average_cost}
                  </p>
                  <p className="text-gray-700">
                    <span className="text-gray-700 font-bold">Seasonality: </span>{' '}
                    {location.seasonality}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Details;
