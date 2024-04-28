import React, { useState } from 'react';
import Swal from 'sweetalert2';
import NavBar from '../component/NavBar';

const BookingSystem = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tourDate: '',
        numberOfPeople: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, like sending data to a server
        // For this example, I'm just showing a SweetAlert confirmation
        Swal.fire({
            title: 'Booking Confirmed!',
            text: 'Your tour has been booked successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    return (
        <div>
            <NavBar></NavBar>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full mx-auto">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tourDate">
                            Tour Date
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="tourDate"
                            type="date"
                            name="tourDate"
                            value={formData.tourDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfPeople">
                            Number of People
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="numberOfPeople"
                            type="number"
                            placeholder="Enter number of people"
                            name="numberOfPeople"
                            value={formData.numberOfPeople}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Confirm Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default BookingSystem;
