
import { Link } from "react-router-dom";

const TouristSpot = () => {
  // Static data for 6 card details
  const countries = [
    {
      _id: "1",
      country_name: "France",
      image_url: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      details: "Explore the Eiffel Tower and Louvre Museum in Paris.",
    },
    {
      _id: "2",
      country_name: "Italy",
      image_url: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      details: "Discover the ancient ruins of Rome and the canals of Venice.",
    },
    {
      _id: "3",
      country_name: "Japan",
      image_url: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      details: "Experience traditional tea ceremonies and modern Tokyo.",
    },
    {
      _id: "4",
      country_name: "Australia",
      image_url: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      details: "Visit the Great Barrier Reef and Sydney Opera House.",
    },
    {
      _id: "5",
      country_name: "Canada",
      image_url: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      details: "Explore the vast wilderness of Banff National Park.",
    },
    {
      _id: "6",
      country_name: "Brazil",
      image_url: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      details: "Experience the vibrant culture of Rio de Janeiro.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {countries.map(country => (
        <div key={country._id} className="bg-white p-4 rounded-md shadow-md">
          <img src={country.image_url} alt={country.country_name} className="w-full h-40 object-cover mb-4 rounded-md" />
          <h3 className="text-lg font-semibold mb-2">{country.country_name}</h3>
          <p className="text-gray-600 mb-4">{country.details}</p>
          <Link to={`/countrydetails/${country.country_name}`}>
  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">View Details</button>
</Link>


        </div>
      ))}
    </div>
  );
};

export default TouristSpot;
