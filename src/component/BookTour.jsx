import React from "react";
import { Link } from "react-router-dom";

const BookingCard = () => {
  return (
    <div className="mt-10 ">
      <h2 className="text-center text-gray-600 font-bold text-2xl">
        Booking System
      </h2>
      <div className="grid grid-cols-3">
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto mt-10">
        <div
          className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        ></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {" "}
            Sundarban
          </h3>

          <div className="flex flex-col items-center justify-center px-3 py-2">
            <span className="font-bold text-gray-800 dark:text-gray-200">
              $129 / 3 Days
            </span>
            <Link to='bookingsystem'>
            <button className="mt-4 px-4 py-2 text-sm font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Book Now
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto mt-10">
        <div
          className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        ></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {" "}
            Sundarban
          </h3>

          <div className="flex flex-col items-center justify-center px-3 py-2">
            <span className="font-bold text-gray-800 dark:text-gray-200">
              $129 / 3 Days
            </span>
            <Link to='bookingsystem'>
            <button className="mt-4 px-4 py-2 text-sm font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Book Now
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto mt-10">
        <div
          className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        ></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {" "}
            Sundarban
          </h3>

          <div className="flex flex-col items-center justify-center px-3 py-2">
            <span className="font-bold text-gray-800 dark:text-gray-200">
              $129 / 3 Days
            </span>
            <Link to='bookingsystem'>
            <button className="mt-4 px-4 py-2 text-sm font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Book Now
            </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BookingCard;
