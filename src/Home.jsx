
import NavBar from './component/NavBar';
import Banner from './component/Banner';
import LocationCard from './component/LocationCard';
import { useLoaderData } from 'react-router-dom';
import TouristSpot from './component/TouristSpot';
import BookTour from './component/BookTour';

const Home = () => {
  const locations = useLoaderData();

  return (
    <div>
      <NavBar />
      <Banner />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Add tourist spot</h1>
        <div>
          <TouristSpot></TouristSpot>
        </div>
        <div className="grid grid-cols-3  gap-6">
          {locations.map(location => (
            <LocationCard key={location._id} location={location} />
          ))}
        </div>
        <div>
          <BookTour></BookTour>
        </div>
      </div>
    </div>
  );
};

export default Home;
