import { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext) || {};
  const [locations, setLocations] = useState([]);
  const [filteredLocation, setFilteredLocation] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/location/${user?.email}`
        );
        if (response.ok) {
          const data = await response.json();
          setLocations(data);
          setFilteredLocation(data);
        } else {
          console.error("Failed to fetch locations:", response.status);
        }
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, [user?.email]);

  const handleDelete = async (_id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:5000/location/${_id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          setLocations(locations.filter(location => location._id !== _id));
          setFilteredLocation(locations.filter(location => location._id !== _id));
          Swal.fire(
            'Deleted!',
            'Your location has been deleted.',
            'success'
          );
        } else {
          console.error("Failed to delete location:", response.status);
          Swal.fire(
            'Error!',
            'Failed to delete location.',
            'error'
          );
        }
      } catch (error) {
        console.error("Error deleting location:", error);
        Swal.fire(
          'Error!',
          'Failed to delete location.',
          'error'
        );
      }
    }
  };

  return (
    <div className="my-10">
      <h2 className="text-center text-2xl font-lato font-bold mb-5">
        My Art and Craft List
      </h2>

      {/* dropdown */}
      <div className="flex justify-center items-center">
        <details className="dropdown">
          <summary className="m-1 btn bg-transparent border-orange-400 text-[#333]">
            Customization
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleFilter("yes")}>
              <a>Yes</a>
            </li>
            <li onClick={() => handleFilter("no")}>
              <a>No</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="container mx-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Country Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tourist Spot Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Average Price
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Seasonality
              </th>
              
              <th className="px-6 py-3 border-b-2 border-gray-300"></th>
            </tr>
          </thead>
          <tbody>
            {filteredLocation.map((location) => (
              <tr key={location._id} className="border-b border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {location.country_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {location.tourists_spot_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {location.average_cost}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {location.seasonality}
                </td>
               
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleDelete(location._id)} className="text-red-600 hover:text-red-900 mr-2">
                    Delete
                  </button>
                  <Link to={`/update/${location._id}`} className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </Link>
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
