import React, { useState } from 'react';

const Home = () => {
 const [currentSlide, setCurrentSlide] = useState(0);
 
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
   {
     id: 3,
     title: "Luxury House Design",
     location: "Quincy St, Brooklyn, NY, USA",
     beds: 4,
     baths: 5,
     garage: 1,
     sqft: 1200,
     price: "7,500",
     image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
   }
 ];

 const features = [
   {
     icon: "👥",
     title: "Trusted By Thousands",
     description: "With over 1 million+ homes for sale available on the website. Trulia can match you with a house you will want to call home."
   },
   {
     icon: "🏠",
     title: "Wide Range Of Properties",
     description: "With over 1 million+ homes for sale available on the website. Trulia can match you with a house you will want to call home."
   },
   {
     icon: "💰",
     title: "Financing Made Easy",
     description: "With over 1 million+ homes for sale available on the website. Trulia can match you with a house you will want to call home."
   },
   {
     icon: "📍",
     title: "See Neighborhoods",
     description: "With over 1 million+ homes for sale available on the website. Trulia can match you with a house you will want to call home."
   }
 ];

 const nextSlide = () => {
   setCurrentSlide((prev) => (prev + 1) % properties.length);
 };

 const prevSlide = () => {
   setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length);
 };

 return (
   <div className="min-h-screen bg-gray-50">
     <header className="bg-slate-800 text-white">
       <div className="container mx-auto px-4 py-3">
         <div className="flex justify-between items-center">
           <div className="flex items-center space-x-8">
             <div className="flex items-center space-x-2">
               <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                 <span className="text-white text-lg">⌂</span>
               </div>
               <span className="text-xl font-semibold">Housing</span>
             </div>
             <nav className="hidden md:flex space-x-6">
               <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
               <a href="#" className="hover:text-blue-400 transition-colors">Properties</a>
               <a href="#" className="hover:text-blue-400 transition-colors">Contacts</a>
             </nav>
           </div>
           <button className="p-2 hover:bg-slate-700 rounded">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
             </svg>
           </button>
         </div>
         
         <div className="mt-4 flex flex-wrap gap-4 items-center">
           <div className="flex-1 min-w-64">
             <div className="relative">
               <input 
                 type="text" 
                 placeholder="Enter an address, neighborhood, city, or ZIP code"
                 className="w-full px-4 py-2 pl-10 rounded-lg text-gray-800"
               />
               <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
             </div>
           </div>
           <div className="flex gap-2">
             <select className="px-3 py-2 rounded text-gray-800">
               <option>Status</option>
             </select>
             <select className="px-3 py-2 rounded text-gray-800">
               <option>Price</option>
             </select>
             <select className="px-3 py-2 rounded text-gray-800">
               <option>Advanced</option>
             </select>
             <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded text-white transition-colors">
               Search
             </button>
           </div>
         </div>
       </div>
     </header>

     <section className="relative h-96 ">
       <div className="absolute inset-0 bg-black bg-opacity-40  bg-cover bg-center h-[600px]  bg-[url('./img/image.png')]"></div>
       <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
         <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
           Skyber Pool Paridiem
         </h1>
         <p className="text-lg mb-4">Quincy St, Brooklyn, NY, USA</p>
         <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
           <span className="flex items-center gap-1">
             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
               <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
             </svg>
             4 Beds
           </span>
           <span className="flex items-center gap-1">🚿 5 Baths</span>
           <span className="flex items-center gap-1">🚗 1 Garage</span>
           <span className="flex items-center gap-1">📐 1200 Sq Ft</span>
         </div>
         <div className="flex space-x-2">
           {[1,2,3,4,5].map(i => (
             <div key={i} className={`w-2 h-2 rounded-full ${i === 3 ? 'bg-white' : 'bg-white/50'}`}></div>
           ))}
         </div>
       </div>
       <button 
         onClick={prevSlide}
         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
       >
         &#8249;
       </button>
       <button 
         onClick={nextSlide}
         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
       >
         &#8250;
       </button>
     </section> <br />

     <section className="py-12 bg-gray-100 mt-[200px]">
       <div className="container mx-auto px-4">
         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Recommended</h2>
         <div className="relative">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {properties.map((property, index) => (
               <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
                       <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
             {[1,2,3,4,5].map((dot, index) => (
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

     <section className="py-12 bg-white">
       <div className="container mx-auto px-4">
         <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Why Choose Us?</h2>
         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
           Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {features.map((feature, index) => (
             <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300 w-[250px]">
               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                 <span className="text-2xl">{feature.icon}</span>
               </div>
               <h3 className="text-lg font-semibold mb-3 text-gray-800">{feature.title}</h3>
               <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
             </div>
           ))}
         </div>
       </div>
     </section>

     <footer className="bg-slate-800 text-white py-8">
       <div className="container mx-auto px-4 text-center">
         <div className="flex items-center justify-center space-x-2 mb-4">
           <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
             <span className="text-white text-lg">⌂</span>
           </div>
           <span className="text-xl font-semibold">Housing</span>
         </div>
         <p className="text-gray-400">&copy; 2025 Housing. All rights reserved.</p>
       </div>
     </footer>
   </div>
 );
};

export default Home;