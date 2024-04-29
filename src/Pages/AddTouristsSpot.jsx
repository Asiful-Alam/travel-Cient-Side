import { useContext } from "react";
import Swal from "sweetalert2";
import NavBar from "../component/NavBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../provider/AuthProvider";

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);
  const notify = () => toast("Wow so easy!");

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName;
    const email = user?.email;
  
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const total_visitors_per_year = form.total_visitors_per_year.value;
    const image = form.spot_image.value; // Get the image URL from the input field
  
    const AddformData = {
      name,
      email,
      image,
      tourists_spot_name,
      country_name,
      location,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      total_visitors_per_year,
    };
    console.log(AddformData);
  
    fetch("http://localhost:5000/location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(AddformData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.inserted) {
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
        }
      });
  };
  return (
    <div>
      <NavBar />
      <div className="max-w-md mx-auto mt-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 rounded-lg">
        <div className="bg-white shadow-md rounded px-8 py-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Add Tourist Spot</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Display user email and name */}
            <div>
              <label htmlFor="user_email" className="block mb-1">User Email:</label>
              <input type="email" id="user_email" name="user_email" value={user?.email} readOnly className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="user_name" className="block mb-1">User Name:</label>
              <input type="text" id="user_name" name="user_name" value={user?.displayName} readOnly className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500" />
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
                <label htmlFor="spot_image" className="block mb-1">
                  Spot Image URL:
                </label>
                <input
                  type="text"
                  id="spot_image"
                  name="image"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                />
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
              <button onClick={notify} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">Add</button>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTouristsSpot;

