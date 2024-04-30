import React from "react";

const PhotographyGalleries = () => {
  // Dummy data for photography galleries
  const galleries = [
    {
      id: 1,
      title: "Landscape Wonders",
      description: "Explore breathtaking landscapes from around the world.",
      imageUrl: "https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Iconic Landmarks",
      description: "Discover iconic landmarks and architectural marvels.",
      imageUrl: "https://images.pexels.com/photos/1006965/pexels-photo-1006965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Cultural Moments",
      description: "Experience vibrant cultural moments captured through the lens.",
      imageUrl: "https://images.pexels.com/photos/3193551/pexels-photo-3193551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center mt-10">Photography Galleries</h2>
      <p className="text-gray-500 text-center mb-8 text-lg font-semibold">Here you can see our Tour capture moment in different category.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {galleries.map((gallery) => (
          <div key={gallery.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <img src={gallery.imageUrl} alt={gallery.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{gallery.title}</h3>
              <p className="text-gray-600">{gallery.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
                View Gallery
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotographyGalleries;
