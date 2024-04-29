import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../component/NavBar';

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
       <div>
        <NavBar></NavBar>
         <div className="min-h-screen bg-gray-100">
          
          <div className="container mx-auto px-4 py-8 flex justify-center">
              <div className="max-w-lg bg-white shadow-md rounded-lg overflow-hidden">
                  <img src={countryDetails.image} alt={countryDetails.country_name} className="w-full h-64 object-cover object-center" />
                  <div className="p-6">
                      <h2 className="text-3xl font-semibold mb-2">{countryDetails.country_name}</h2>
                      <p className="text-gray-600 mb-4"><span className="font-semibold">Tourist Spot:</span> {countryDetails.tourists_spot_name}</p>
                      <p className="text-gray-600 mb-4"><span className="font-semibold">Location:</span> {countryDetails.location}</p>
                      <p className="text-gray-600 mb-4"><span className="font-semibold">Short Description:</span> {countryDetails.short_description}</p>
                      <p className="text-gray-600 mb-4"><span className="font-semibold">Average Cost:</span> {countryDetails.average_cost}</p>
                      <p className="text-gray-600 mb-4"><span className="font-semibold">Seasonality:</span> {countryDetails.seasonality}</p>
                  </div>
              </div>
          </div>
      </div>
       </div>
    );
};

export default ViewCountrySpot;
