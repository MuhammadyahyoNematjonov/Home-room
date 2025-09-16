import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#0A2342] text-white px-10 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">📍</span>
          <span className="font-semibold text-lg">Houzing</span>
        </div>
        <ul className="flex gap-10 text-sm">
          <li><a href="#">Home</a></li>
          <li><a href="#">Properties</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white shadow-lg p-8 rounded-md w-full max-w-md">
          <h3 className="font-semibold text-lg mb-4">Profile</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Login" className="w-full border-b outline-none py-2" />
            <input type="text" placeholder="First name" className="w-full border-b outline-none py-2" />
            <input type="text" placeholder="Last name" className="w-full border-b outline-none py-2" />
            <input type="email" placeholder="Email" className="w-full border-b outline-none py-2" />
            <div className="relative">
              <select className="w-full border-b outline-none py-2 appearance-none">
                <option>shop-p</option>
                <option>User</option>
              </select>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">&#9662;</span>
            </div>
            <input type="password" placeholder="Password" className="w-full border-b outline-none py-2" />
            <input type="password" placeholder="Re-enter password" className="w-full border-b outline-none py-2" />
            <button
              type="submit"
              className="w-full bg-[#0058FF] text-white py-2 rounded mt-2"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0A2342] text-white mt-10">
        <div className="max-w-6xl mx-auto px-10 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h5 className="font-semibold mb-4">Contact Us</h5>
            <p className="text-sm mb-2">329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
            <p className="text-sm mb-2">123 456 7890</p>
            <p className="text-sm mb-2">support@houzing.com</p>
            <div className="flex gap-3 mt-2">
              <a href="#"><span>🌐</span></a>
              <a href="#"><span>🐦</span></a>
              <a href="#"><span>📸</span></a>
              <a href="#"><span>🔗</span></a>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Discover</h5>
            <ul className="space-y-1 text-sm">
              <li>Chicago</li>
              <li>Los Angeles</li>
              <li>Miami</li>
              <li>New York</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Lists by Category</h5>
            <ul className="space-y-1 text-sm">
              <li>Apartments</li>
              <li>Condos</li>
              <li>Houses</li>
              <li>Offices</li>
              <li>Retail</li>
              <li>Villas</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Lists by Category</h5>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Support Center</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-3 px-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Houzing</span>
          </div>
          <span>Copyright © 2021 CreativeLayers. All Right Reserved.</span>
          <button className="bg-[#0058FF] text-white px-3 py-1 rounded">↑</button>
        </div>
      </footer>
    </div>
  );
}