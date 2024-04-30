import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { country_name } = useParams();
    const [countryDetails, setCountryDetails] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/location/country/${country_name}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCountryDetails(data);
            })
            .catch((error) => {
                console.error('Error fetching country details:', error);
            });
    }, [country_name]); 

    return (
        <div className="container mx-auto">
            {countryDetails.map((detail) => (
                <div key={detail._id} className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl mb-8">
                    <img className="w-full h-64 object-cover object-center" src={detail.image} alt={detail.country_name} />
                    <div className="px-6 py-4">
                        <h2 className="text-xl font-bold mb-2">{detail.tourists_spot_name}</h2>
                        <p className="text-gray-700 mb-4">Location: {detail.location}</p>
                        <p className="text-gray-700 mb-4">{detail.short_description}</p>
                        <Link to='/viewcountryspot' className="flex justify-end">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View More
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CountryDetails;
