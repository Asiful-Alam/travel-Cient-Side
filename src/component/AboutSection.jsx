import React from 'react';

const AboutUsSection = () => {
    return (
        <div className="bg-gray-100 py-12 mt-16">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center justify-center mb-8">
                        <img
                            className="object-cover w-24 h-24 border-2 border-blue-500 rounded-full"
                            alt="Team Avatar"
                            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                        />
                    </div>

                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>

                    <p className="text-lg text-gray-600 mb-6">
                        At Adventure Travel Co., we believe in the transformative power of travel. Our mission is to provide unforgettable experiences that connect people with the world and each other. Whether you're seeking a thrilling adventure in the mountains, a relaxing beach getaway, or a cultural immersion in a bustling city, we're here to make your travel dreams a reality.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                            <p className="text-gray-600">
                                Our mission is to inspire and empower travelers to explore new destinations, discover diverse cultures, and create lasting memories through authentic travel experiences.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
                            <p className="text-gray-600">
                                We envision a world where travel transcends boundaries, fosters understanding, and promotes sustainable tourism practices. Our goal is to be the leading provider of ethical and immersive travel experiences worldwide.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Testimonials</h2>

                    <div className="mb-6">
                        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                            <p className="text-gray-600 mb-2">
                                "Adventure Travel Co. exceeded my expectations! The trip was well-organized, and the guides were knowledgeable. I can't wait to book my next adventure with them."
                            </p>
                            <p className="text-blue-600 font-medium">- John Doe</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <p className="text-gray-600 mb-2">
                                "I had an amazing experience exploring new cultures and landscapes with Adventure Travel Co. Highly recommend their tours to anyone seeking adventure and authenticity."
                            </p>
                            <p className="text-blue-600 font-medium">- Jane Smith</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Sponsors</h2>

                    <div className="flex justify-between items-center mb-4">
                        <img
                            className="object-contain h-12"
                            alt="Sponsor Logo"
                            src="https://images.pexels.com/photos/19658272/pexels-photo-19658272/free-photo-of-old-apple-computer-logo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                        <img
                            className="object-contain h-12"
                            alt="Sponsor Logo"
                            src="https://images.pexels.com/photos/13805647/pexels-photo-13805647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                        <img
                            className="object-contain h-12"
                            alt="Sponsor Logo"
                            src="https://images.pexels.com/photos/9973155/pexels-photo-9973155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                        <img
                            className="object-contain h-12"
                            alt="Sponsor Logo"
                            src="https://images.pexels.com/photos/9740571/pexels-photo-9740571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </div>

                    <div className="flex justify-end mt-8">
                        <a href="#" className="text-lg font-medium text-blue-600 hover:text-blue-700">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;
