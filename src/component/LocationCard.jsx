import React from 'react';

const LocationCard = ({ location }) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full  p-4">
        <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={location.image} alt={location.tourists_spot_name} className="w-full h-64 object-cover object-center" />
          <div className="p-4">
            <h2 className="text-gray-800 font-bold text-xl mb-2">{location.tourists_spot_name}</h2>
            <p className="text-gray-600 text-base">{location.short_description}</p>
            <div className="mt-3 flex justify-between">
              <div>
                <p className="text-gray-700">Country: {location.country_name}</p>
                <p className="text-gray-700">Location: {location.location}</p>
              </div>
              <div>
                <p className="text-gray-700">Average Cost: {location.average_cost}</p>
                <p className="text-gray-700">Seasonality: {location.seasonality}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
