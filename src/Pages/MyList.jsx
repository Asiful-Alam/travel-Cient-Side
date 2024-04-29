import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext) || {};
  const [myLocations, setMyLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/location/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          const userLocations = data.filter(location => location.creator_email === user.email);
          setMyLocations(userLocations);
          setFilteredLocations(userLocations);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [user?.email]);

  const handleFilter = (value) => {
    if (value === "yes" || value === "no") {
      const remainingLocations = myLocations.filter(
        (location) => location.customization === value
      );
      setFilteredLocations(remainingLocations);
    } else {
      setFilteredLocations(myLocations);
    }
  };
  return (
    <div className="my-10">
      <h2 className="text-center text-2xl font-bold mb-5">My Locations List</h2>
      
      <div className="flex justify-center items-center mb-4">
        <select
          className="p-2 border border-gray-400 rounded"
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="">Filter by Customization</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Country
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Travel Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
               Average cost
              </th>
              
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total visitor/year
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredLocations.map((location) => (
              <tr key={location._id}>
                <td className="px-6 py-4 whitespace-nowrap">{location.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">{location.country_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{location.travel_time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{location.average_cost}</td>
                <td className="px-6 py-4 whitespace-nowrap">{location.total_visitors_per_year}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/update/${location._id}`}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Update
                  </Link>
                  <button
                    className="text-red-600 hover:text-red-900"
                    // onClick={() => handleDelete(location._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
