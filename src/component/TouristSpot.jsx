import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TouristSpot = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategories(data);
      });
  }, []);
  console.log('pb data',categories)
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-4xl text-orange-500 font-lato font-bold text-center mb-6">
       SouthEast Asia
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 lg:px-0">
        {categories.map((category) => (
          <Link
            to={`/countrydetails/${category.country_name}`}
            key={category._id}
            className="p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 cursor-pointer"
          >
            <img
              src={category.image_url}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div>
              <p>
              <span className="text-xl font-medium text-red-500">Details:  </span>{category.details}
              </p>
            </div>
            <div className="mt-6 mb-2">
             <Link to={`/countrydetails/${category.country_name}`}>
             <div className="bg-gradient-to-r from-blue-200 to-cyan-200 p-3 rounded-md text-center mb-2">
                <h2 className=" block text-base md:text-xl font-medium tracking-widest uppercase dark:text-orange-500">
                  {category.country_name}
                </h2>
              </div>
             </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TouristSpot;
