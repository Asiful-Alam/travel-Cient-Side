
import NavBar from './component/NavBar';
import Banner from './component/Banner';
import LocationCard from './component/LocationCard';
import { useLoaderData } from 'react-router-dom';
import TouristSpot from './component/TouristSpot';
import BookTour from './component/BookTour';
import AboutSection from './component/AboutSection';
import TourPackages from './component/TourPackages';
import PhotographyGalleries from './component/PhotographyGalleries ';


const Home = () => {
  const locations = useLoaderData();
  console.log(locations);
  return (
    <div className="mx-auto">
      <NavBar />
      <Banner />
      <div className="container mx-auto">
        
        <div className="mt-10 ml-4 p-4">
          <TouristSpot></TouristSpot>
        </div>
        <h1 className="text-3xl font-bold mt-10 mb-4 text-center text-red-400">Tourist Spot</h1>
        <p className='text-center text-gray-500 text-lg'>Discover breathtaking destinations and unforgettable experiences. Plan your dream getaway with ease and make memories that last a lifetime. Start your adventure today!</p>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {locations.map(location => (
            <div key={location._id} className="flex justify-center">
              <LocationCard location={location} />
            </div>
          ))}
        </div>
        <div>
          <TourPackages></TourPackages>
        </div>
        <div>
          <BookTour></BookTour>
        </div>
        <div>
          <PhotographyGalleries></PhotographyGalleries>
        </div>
        <AboutSection></AboutSection>
      </div>
    </div>
  );
};

export default Home;
