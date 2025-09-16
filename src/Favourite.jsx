import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from './Nabar';

const Favourite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Liked properties uchun state qo'shamiz
  const [likedProperties, setLikedProperties] = useState(new Set());

  const properties = [
    {
      id: 1,
      title: "New Apartment Nice View",
      location: "Quincy St, Brooklyn, NY, USA",
      beds: 4,
      baths: 5,
      garage: 1,
      sqft: 1200,
      price: "7,500",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Modern Villa with Pool",
      location: "Quincy St, Brooklyn, NY, USA",
      beds: 4,
      baths: 5,
      garage: 1,
      sqft: 1200,
      price: "7,500",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop"
    },
    // Qolgan propertylar...
  ];

  // Like toggle funksiyasi
  const toggleLike = (propertyId) => {
    setLikedProperties(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(propertyId)) {
        newLiked.delete(propertyId); // Agar like bo'lsa, olib tashlash
      } else {
        newLiked.add(propertyId); // Agar like bo'lmasa, qo'shish
      }
      return newLiked;
    });
  };

  // Boshqa funksiyalar...
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen bg-gray-50">
        <Navbar />
      </div>

      <section className="py-12 bg-gray-100 mt-[-800px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Favourite</h2>
          <h3 className='text-gray-400 ml-[550px]'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h3>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property, index) => (
                <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow mt-[40px]">
                  <div className="relative">
                    <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                    <span className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                      FEATURED
                    </span>
                    <span className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                      FOR SALE
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">{property.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{property.location}</p>
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">🏠 {property.beds} Beds</span>
                      <span className="flex items-center gap-1">🚿 {property.baths} Baths</span>
                      <span className="flex items-center gap-1">🚗 {property.garage} Garage</span>
                      <span className="flex items-center gap-1">📐 {property.sqft} Sq Ft</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-blue-600">${property.price}/mo</span>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                          </svg>
                        </button>
                        {/* Like button - o'zgartirilgan */}
                        <button 
                          onClick={() => toggleLike(property.id)}
                          className={`p-2 transition-colors ${
                            likedProperties.has(property.id) 
                              ? 'text-red-600 hover:text-red-700' 
                              : 'text-gray-400 hover:text-red-600'
                          }`}
                        >
                          <svg 
                            className="w-4 h-4" 
                            fill={likedProperties.has(property.id) ? "currentColor" : "none"} 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {[1, 2, 3, 4, 5].map((dot, index) => (
                <button
                  key={dot}
                  className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-blue-600' : 'bg-gray-300'}`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qolgan kodlar... */}
    </div>
  );
};

export default Favourite;