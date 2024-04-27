import { useLoaderData } from "react-router-dom";
import LocationCard from "../component/LocationCard";


const TouristSpot = () => {
    const locations = useLoaderData();
    return (
        <div>
           
           <div className="grid grid-cols-3  gap-6">
          {locations.map(location => (
            <LocationCard key={location._id} location={location} />
          ))}
        </div>
        </div>
    );
};

export default TouristSpot;