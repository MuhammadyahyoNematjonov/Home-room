import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Bu yerda real API ga so'rov yuborasiz
      // Hozircha mock data bilan ishlayapman
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        
        // Token ni localStorage ga saqlash
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        console.log('Login successful, token saved:', data.token);
        
        // Bosh sahifaga yo'naltirish
        navigate('/');
      } else {
        console.error('Login failed');
        alert('Email yoki parol noto\'g\'ri');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login jarayonida xatolik yuz berdi');
    } finally {
      setIsLoading(false);
    }
  };

  // Test uchun qo'lda token qo'shish funksiyasi
  const handleTestLogin = () => {
    const testToken = 'test-token-' + Date.now();
    const testUser = {
      id: 1,
      email: formData.email || 'test@example.com',
      name: 'Test User'
    };
    
    localStorage.setItem('token', testToken);
    localStorage.setItem('user', JSON.stringify(testUser));
    
    console.log('Test token saved:', testToken);
    
    
    // Bosh sahifaga yo'naltirish
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-slate-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-xl font-semibold">Housing</span>
            </div>
            
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/Properties" className="text-white hover:text-blue-400 transition-colors">
                Properties
              </Link>
              <Link to="/" className="text-white hover:text-blue-400 transition-colors">
                Contacts
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center min-h-screen py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Login
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            {/* <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
            >
              {isLoading ? 'Kirilmoqda...' : 'Login'}
            </button> */}
          </form>

          {/* Test uchun qo'shimcha tugma */}
          <div className="mt-4">
            <button
              onClick={handleTestLogin}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
            >
              Login
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              Bu tugma test uchun qo'lda token yaratadi
            </p>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-800 font-medium">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer qismi o'zgarishsiz qoldirilgan */}
      <footer className="bg-slate-800 text-white py-12">
        {/* ... footer content ... */}
      </footer>
    </div>
  );
};

export default LoginPage;