import NavBar from "../component/NavBar";

const Update = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-md mx-auto mt-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 rounded-lg">
        <div className="bg-white shadow-md rounded px-8 py-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Update Tourist Spot</h2>
          <form className="space-y-4">
            {/* Display user email and name */}
            <div>
              <label htmlFor="user_email" className="block mb-1">User Email:</label>
              <input type="email" id="user_email" name="user_email" readOnly className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="user_name" className="block mb-1">User Name:</label>
              <input type="text" id="user_name" name="user_name" readOnly className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            {/* Additional form fields */}
            <div>
              <label htmlFor="tourists_spot_name" className="block mb-1">Tourists Spot Name:</label>
              <input type="text" id="tourists_spot_name" name="tourists_spot_name" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="country_name" className="block mb-1">Country Name:</label>
              <input type="text" id="country_name" name="country_name" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="location" className="block mb-1">Location:</label>
              <input type="text" id="location" name="location" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="short_description" className="block mb-1">Short Description:</label>
              <textarea id="short_description" name="short_description" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <div>
              <label htmlFor="average_cost" className="block mb-1">Average Cost:</label>
              <input type="text" id="average_cost" name="average_cost" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="seasonality" className="block mb-1">Seasonality:</label>
              <input type="text" id="seasonality" name="seasonality" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="travel_time" className="block mb-1">Travel Time:</label>
              <input type="text" id="travel_time" name="travel_time" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="total_visitors_per_year" className="block mb-1">Total Visitors Per Year:</label>
              <input type="text" id="total_visitors_per_year" name="total_visitors_per_year" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            {/* Submit button */}
            <div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
