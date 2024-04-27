import  { useState } from 'react';
import Swal from 'sweetalert2'


const AddTouristsSpot = () => {
  const [formData, setFormData] = useState({
    image: '',
    tourists_spot_name: '',
    country_name: '',
    location: '',
    short_description: '',
    average_cost: '',
    seasonality: '',
    travel_time: '',
    total_visitors_per_year: '',
    user_email: '',
    user_name: '',
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const AddformData = {
      image: form.image.value,
      tourists_spot_name: form.tourists_spot_name.value,
      country_name: form.country_name.value,
      location: form.location.value,
      short_description: form.short_description.value,
      average_cost: form.average_cost.value,
      seasonality: form.seasonality.value,
      travel_time: form.travel_time.value,
      total_visitors_per_year: form.total_visitors_per_year.value,
      user_email: form.user_email.value,
      user_name: form.user_name.value,
    };
    
    console.log(AddformData);

    // send data to the server
  fetch('http://localhost:5000/location',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify(AddformData)
  })
  .then(res => res.json())
  .then(data=>{
    console.log(data);
    if(data.inserted){

      Swal.fire({
        title: 'success!',
        text: 'user added this successfuly',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
})


  };
  

  return (
    <div>
     
      <div className="max-w-md mx-auto mt-8 ">
      
      <div className=' '>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="image" className="block mb-1">Image URL:</label>
            <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label htmlFor="tourists_spot_name" className="block mb-1">Tourists Spot Name:</label>
            <input type="text" id="tourists_spot_name" name="tourists_spot_name" value={formData.tourists_spot_name} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label htmlFor="country_name" className="block mb-1">Country Name:</label>
            <input type="text" id="country_name" name="country_name" value={formData.country_name} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label htmlFor="location" className="block mb-1">Location:</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label htmlFor="short_description" className="block mb-1">Short Description:</label>
            <textarea id="short_description" name="short_description" value={formData.short_description} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2"></textarea>
          </div>
          <div>
            <label htmlFor="average_cost" className="block mb-1">Average Cost:</label>
            <input type="text" id="average_cost" name="average_cost" value={formData.average_cost} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label htmlFor="seasonality" className="block mb-1">Seasonality:</label>
            <input type="text" id="seasonality" name="seasonality" value={formData.seasonality} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label htmlFor="travel_time" className="block mb-1">Travel Time:</label>
            <input type="text" id="travel_time" name="travel_time" value={formData.travel_time} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label htmlFor="total_visitors_per_year" className="block mb-1">Total Visitors Per Year:</label>
            <input type="text" id="total_visitors_per_year" name="total_visitors_per_year" value={formData.total_visitors_per_year} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label htmlFor="user_email" className="block mb-1">User Email:</label>
            <input type="email" id="user_email" name="user_email" value={formData.user_email} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label htmlFor="user_name" className="block mb-1">User Name:</label>
            <input type="text" id="user_name" name="user_name" value={formData.user_name} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AddTouristsSpot;
