import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Token mavjudligini tekshirish
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setShowProfileMenu(false);
    navigate('/');
  };

  // Tashqariga bosganda menuni yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showProfileMenu && !event.target.closest('.profile-dropdown')) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileMenu]);

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
      title: "Minglab odamlar ishonadi",
      description: "Veb-saytda sotuvga chiqarilgan 1 milliondan ortiq uy bilan. Trulia sizni uy deb atash istagan uy bilan bog'lay oladi."
    },
    {
      icon: "🏠",
      title: "Mulklarning keng assortimenti",
      description: "Veb-saytda sotuvga chiqarilgan 1 milliondan ortiq uy bilan. Trulia sizni uy deb atash istagan uy bilan bog'lay oladi."
    },
    {
      icon: "💰",
      title: "Moliyalashtirish oson qilindi",
      description: "Veb-saytda sotuvga chiqarilgan 1 milliondan ortiq uy bilan. Trulia sizni uy deb atash istagan uy bilan bog'lay oladi."
    },
    {
      icon: "📍",
      title: "Mahallalarni ko'ring",
      description: "Veb-saytda sotuvga chiqarilgan 1 milliondan ortiq uy bilan. Trulia sizni uy deb atash istagan uy bilan bog'lay oladi."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const categories = [
    {
      id: 1,
      title: "Uy",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=300&h=200&fit=crop",
      icon: "🏠"
    },
    {
      id: 2,
      title: "Kvartira",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop",
      icon: "🏢"
    },
    {
      id: 3,
      title: "Ofis",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop",
      icon: "🏢"
    },
    {
      id: 4,
      title: "Villa",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300&h=200&fit=crop",
      icon: "🏘️"
    }
  ];

  const recentProperties = [
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
      title: "Modern House Design",
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
      title: "Luxury Villa with Pool",
      location: "Quincy St, Brooklyn, NY, USA",
      beds: 4,
      baths: 5,
      garage: 1,
      sqft: 1200,
      price: "7,500",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Marcus McKinney",
      text: "Men sizning ishingiz va mijozlarga xizmat ko'rsatishingizdan mamnunman. Bunday sifatli ish va a'lo darajadagi xizmatni topish juda kam uchraydi!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      text: "Ajoyib xizmat va tafsilotlarga e'tibor. Jamoa bizga orzuimizdagi uyni topishda yordam berish uchun barcha imkoniyatlarini ishga soldi. Tavsiya qilaman!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "David Wilson",
      text: "Professional, ishonchli va bilimdon. Ular butun jarayonni boshidan oxirigacha silliq va stresssiz qilishdi.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-slate-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-2xl font-semibold">Houzing</span>
              </div>
              <div className="h-8 w-px bg-gray-600"></div>
              
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">
                  Home
                </a>
                <Link to="/Properties" className="text-white hover:text-blue-400 transition-colors font-medium">
                  Properties
                </Link>
                <Link to="/Contacts" className="text-white hover:text-blue-400 transition-colors font-medium">
                  contacts
                </Link>
              </nav>
            </div>

            {/* Token mavjudligiga qarab ko'rsatish */}
            {isLoggedIn ? (
              // Token mavjud bo'lsa - profil avatar va dropdown
              <div className="relative profile-dropdown">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 p-2 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  {/* Foydalanuvchi avatar */}
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown menyu */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>Mening profilim</span>
                      </div>
                    </Link>
                    <Link 
                      to="/my-properties" 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                        </svg>
                        <span>Properties</span>
                      </div>
                    </Link>
                    <Link 
                      to="/favourites" 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>Sevimlilar</span>
                      </div>
                    </Link>
                    <hr className="my-2" />
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span>Chiqish</span>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link 
                  to="/login"
                  className="px-4 py-2 text-white border border-white rounded-lg hover:bg-white hover:text-slate-800 transition-colors font-medium"
                >
                  Kirish
                </Link>
                <Link 
                  to="/RegisterPage"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Ro'yxatdan o'tish
                </Link>
              </div>
            )}
          </div>
        </div>
        
        {/* Qidiruv bo'limi */}
        <div className="border-t border-slate-700 bg-slate-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch">
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Manzil, mahalla, shahar yoki pochta kodini kiriting"
                    className="w-full pl-12 pr-4 py-3 bg-white text-gray-800 rounded-lg border-none focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="relative">
                  <select className="px-4 py-3 bg-white text-gray-700 rounded-lg border-none focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none pr-10 cursor-pointer text-sm min-w-24">
                    <option>Holati</option>
                    <option>Sotiladi</option>
                    <option>Ijaraga beriladi</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <select className="px-4 py-3 bg-white text-gray-700 rounded-lg border-none focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none pr-10 cursor-pointer text-sm min-w-20">
                    <option>Narx</option>
                    <option>$0 - $500k</option>
                    <option>$500k - $1M</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <select className="px-4 py-3 bg-white text-gray-700 rounded-lg border-none focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none pr-10 cursor-pointer text-sm min-w-28">
                    <option>Qo'shimcha</option>
                    <option>Yotoq xonalar</option>
                    <option>Vannalar</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-white font-medium transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Qidirish
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
              4 Yotoqxona
            </span>
            <span className="flex items-center gap-1">🚿 5 Hammom</span>
            <span className="flex items-center gap-1">🚗 1 Garaj</span>
            <span className="flex items-center gap-1">📐 1200 Kv Ft</span>
          </div>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map(i => (
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
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Tavsiya etilgan</h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property, index) => (
                <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                    <span className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                      AJRATILGAN
                    </span>
                    <span className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                      SOTILADI
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">{property.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{property.location}</p>
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">🏠 {property.beds} Xona</span>
                      <span className="flex items-center gap-1">🚿 {property.baths} Hammom</span>
                      <span className="flex items-center gap-1">🚗 {property.garage} Garaj</span>
                      <span className="flex items-center gap-1">📐 {property.sqft} Kv Ft</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-blue-600">${property.price}/oy</span>
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

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Nega bizni tanlaydiz?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Biz sizga eng yaxshi xizmat va professional yordam taklif qilamiz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
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

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Kategoriyalar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-75 object-cover brightness-75 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0  bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-cover bg-center h-[600px]"
        style={{ backgroundImage: "url('./img/image.png')" }}>
        <div className="absolute inset-0  bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto">
            Vermont fermasi antik qamoqxona bilan haftaning eng mashhur uyi
          </h2>
          <p className="text-xl mb-8">Haftaning eng mashhur uyi</p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-white font-semibold transition-colors">
            Batafsil o'qish
          </button>
        </div>
      </section>

      {/* Recent Properties for Rent */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ijaraga beriladigan so'nggi mulklar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Eng yangi va qulay ijaraga beriladigan mulklar bilan tanishing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                  <span className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                    AJRATILGAN
                  </span>
                  <span className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                    IJARAGA
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{property.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{property.location}</p>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                    <span>🛏️ {property.beds} Xona</span>
                    <span>🚿 {property.baths} Hammom</span>
                    <span>🚗 {property.garage} Garaj</span>
                    <span>📐 {property.sqft} Kv Ft</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">${property.price}/oy</span>
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Mijozlar fikri</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bizning xizmatlarimizdan foydalangan mijozlarning fikrlari.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Biz bilan bog'lanish</h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  329 Queensberry Street, North Melbourne VIC 3051, Australia
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  123 456 7890
                </p>
                <p className="flex items-center">
                  <span className="mr-2">✉️</span>
                  support@example.com
                </p>
              </div>
              <div className="flex space-x-3 mt-4">
                <button className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                  f
                </button>
                <button className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center hover:bg-blue-500 transition-colors">
                  t
                </button>
              </div>
            </div>

            {/* Discover */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Kashf qiling</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Chicago</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Los Angeles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Miami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New York</a></li>
              </ul>
            </div>

            {/* List by Category */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Kategoriya bo'yicha</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Kvartiralarz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kondolar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Uylar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ofislar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Savdo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Villalar</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Kompaniya</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Haqida</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Aloqa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agent bo'lish</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Narxlar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Maxfiylik siyosati</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">⌂</span>
                </div>
                <span className="text-xl font-semibold">Housing</span>
              </div>
              <p className="text-gray-400 text-sm">
                Mualliflik huquqi © 2024 CreativeLayers. Barcha huquqlar himoyalangan.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;