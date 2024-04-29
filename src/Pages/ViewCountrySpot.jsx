import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewCountrySpot = () => {
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
        <div className="container mx-auto px-4 py-8">
            {countryDetails ? (
                <div className="bg-white rounded-lg overflow-hidden shadow-md w-[500px]">
                    <img src={countryDetails.image} alt={countryDetails.country_name} className="w-full h-48 object-cover object-center" />
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">{countryDetails.country_name}</h2>
                        <p className="text-gray-600 mb-2"><span className="font-semibold">Tourist Spot:</span> {countryDetails.tourists_spot_name}</p>
                        <p className="text-gray-600 mb-4"><span className="font-semibold">Short Description:</span> {countryDetails.short_description}</p>
                        <p className="text-gray-600 mb-4"><span className="font-semibold">Average Cost:</span> {countryDetails.average_cost}</p>
                        <p className="text-gray-600 mb-4"><span className="font-semibold">seaspnality:</span> {countryDetails.seasonality}</p>
                    </div>
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default ViewCountrySpot;
