import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../component/NavBar";

const CountryDetails = () => {
  const { country_name } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/bd/${country_name}`);
        if (!response.ok) {
          throw new Error('Failed to fetch country details');
        }
        const data = await response.json();
        console.log("Fetched country details:", data); 
        setCountryDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching country details:', error);
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [country_name]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
   <div>
    <NavBar>
    </NavBar>
    <div className="mx-auto bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900 w-[1000px]">
      <div className="container grid grid-cols-12 mx-auto bg-gray-900 dark:bg-gray-50">
        <div className="bg-no-repeat bg-cover bg-gray-700 dark:bg-gray-300 col-span-full lg:col-span-4" style={{backgroundImage: `url('${countryDetails.image}')`, backgroundPosition: 'center center', backgroundBlendMode: 'multiply', backgroundSize: 'cover'}}></div>
        <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10 gap-6">
          <div className="flex justify-start">
            <span className="px-2 py-1 text-xs rounded-full bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">Tourist Spot</span>
          </div>
          <h1 className="text-3xl font-semibold">{countryDetails.country_name}</h1>
          <p className="flex-1 pt-2">{countryDetails.short_description}</p>
          <Link to={`/viewcountryspot/${countryDetails.country_name}`} rel="noopener noreferrer" className="inline-flex items-center pt-2 pb-6 space-x-2 text-lg text-violet-400 dark:text-violet-700">
            <span>Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </Link>
          <div className="flex items-center justify-between pt-2">
           
            <span className="text-xs">{countryDetails.read_time}</span>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default CountryDetails;
