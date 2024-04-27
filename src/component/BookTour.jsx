// BookTour.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BookTour = () => {
    return (
        <div className="container mx-auto mt-10 flex">
            {/* Left side */}
            <div className="w-1/2 p-8 bg-blue-200">
                <h1 className="text-3xl font-bold mb-4">How to Book</h1>
                <p className="text-lg text-gray-800 mb-6">1. Select your desired country.</p>
                <p className="text-lg text-gray-800 mb-6">2. Click on the "Book Now" button below the country card.</p>
                <p className="text-lg text-gray-800 mb-6">3. Fill in your details and submit the form.</p>
                <p className="text-lg text-gray-800 mb-6">4. You will be redirected to a confirmation page.</p>
            </div>

            {/* Right side */}
            <div className="w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-4">Choose Your Destination</h2>
                <div className="flex justify-between">
                    {/* Card 1 */}
                    <div className="w-1/4 bg-white shadow-md rounded-md overflow-hidden">
                        <img src="country_image_1.jpg" alt="Country 1" className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">Country 1</h3>
                            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link to="/booking/country1" className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md text-center">Book Now</Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="w-1/4 bg-white shadow-md rounded-md overflow-hidden">
                        <img src="country_image_2.jpg" alt="Country 2" className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">Country 2</h3>
                            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link to="/booking/country2" className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md text-center">Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookTour;
