
import NavBar from './component/NavBar';
import Banner from './component/Banner';
import LocationCard from './component/LocationCard';
import { useLoaderData } from 'react-router-dom';
import TouristSpot from './component/TouristSpot';
import BookTour from './component/BookTour';
import AboutSection from './component/AboutSection';

const Home = () => {
  const locations = useLoaderData();

  return (
    <div className="mx-auto">
      <NavBar />
      <Banner />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mt-10 mb-4 text-center">Add tourist spot</h1>
        <div className="mt-10 ml-4">
          <TouristSpot></TouristSpot>
        </div>
        <div className="grid grid-cols-3  gap-6 mt-10 ">
          {locations.map(location => (
            <LocationCard key={location._id} location={location} />
          ))}
        </div>
        <div>
          <BookTour></BookTour>
        </div>
      <AboutSection></AboutSection>
      </div>
     
    </div>
  
  );
};

export default Home;
