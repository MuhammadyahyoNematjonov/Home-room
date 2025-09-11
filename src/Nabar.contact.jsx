import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
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

  return (
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
              <Link to="/" className="text-white hover:text-blue-400 transition-colors font-medium">
                Home
              </Link>
              <Link to="/Properties" className="text-white hover:text-blue-400 transition-colors font-medium">
                Properties
              </Link>
              <Link to="/Contacts" className="text-gray-500 hover:text-blue-400 transition-colors font-medium">
                Contacts
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
                    to="/Properties" 
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
  );
};

export default Navbar;