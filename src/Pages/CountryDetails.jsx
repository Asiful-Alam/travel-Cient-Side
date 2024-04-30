import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../component/NavBar';

const CountryDetails = () => {
    const { country_name } = useParams();
    const [countryDetails, setCountryDetails] = useState([]);


  
    
    
    useEffect(() => {
        fetch("http://localhost:5000/countries/"+country_name)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCountryDetails(data);
            })
            .catch((error) => {
                console.error('Error fetching country details:', error);
            });
    }, [country_name]);

    const [showMore, setShowMore] = useState({});

    const toggleShowMore = (id) => {
        setShowMore({
            ...showMore,
            [id]: !showMore[id]
        });
    };
    console.log('cd data',countryDetails)
    return (
        <div className="container mx-auto">
          <NavBar></NavBar>
            {countryDetails.length>0&&countryDetails.map((detail) => (
                <div key={detail._id} className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl mb-8">
                    <img className="w-full h-64 object-cover object-center" src={detail.image} alt={detail.country_name} />
                    <div className="px-6 py-4">
                        <h2 className="text-xl font-bold mb-2">{detail.tourists_spot_name}</h2>
                        <p className="text-gray-700 mb-4">Location: {detail.location}</p>
                        <p className="text-gray-700 mb-4">{detail.short_description}</p>
                        {showMore[detail._id] ? (
                            <>
                                <p className="text-gray-700 mb-2">Travel Time: {detail.travel_time}</p>
                                <p className="text-gray-700 mb-2">Seasonality: {detail.seasonality}</p>
                                <p className="text-gray-700 mb-2">Average Cost: {detail.average_cost}</p>
                            </>
                        ) : null}
                        <button onClick={() => toggleShowMore(detail._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            {showMore[detail._id] ? "Show Less" : "View More"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CountryDetails;
