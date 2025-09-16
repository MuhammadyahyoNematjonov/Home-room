import { Search, Edit, Trash2, Home, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Link, useNavigate } from "react-router-dom";

export default function PropertiesPage() {
  const properties = [
    // ... properties data stays the same
    {
      id: 1,
      title: "New Apartment Nice View",
      location: "Quincy St, Brooklyn, NY, USA",
      price: "$7,500/mo",
      datePublished: "30 December 2022",
      status: "Pending",
      views: 5933,
      image: "/modern-apartment-exterior.png",
      beds: 4,
      baths: 5,
      garage: 1,
      sqft: 1200,
    },
    {
      id: 2,
      title: "Modern Villa with Pool",
      location: "Quincy St, Brooklyn, NY, USA",
      price: "$8,200/mo",
      datePublished: "28 December 2022",
      status: "Active",
      views: 4521,
      image: "/luxury-apartment-building.png",
      beds: 5,
      baths: 4,
      garage: 2,
      sqft: 1800,
    },
    {
      id: 3,
      title: "Luxury House Design",
      location: "Quincy St, Brooklyn, NY, USA",
      price: "$9,500/mo",
      datePublished: "25 December 2022",
      status: "Sold",
      views: 6789,
      image: "/contemporary-apartment-complex.png",
      beds: 6,
      baths: 6,
      garage: 3,
      sqft: 2200,
    },
    {
      id: 4,
      title: "Cozy Downtown Apartment",
      location: "Manhattan, New York, NY, USA",
      price: "$6,800/mo",
      datePublished: "22 December 2022",
      status: "Pending",
      views: 3456,
      image: "/modern-apartment-exterior.png",
      beds: 3,
      baths: 2,
      garage: 1,
      sqft: 950,
    },
    {
      id: 5,
      title: "Spacious Family Home",
      location: "Queens, New York, NY, USA",
      price: "$5,200/mo",
      datePublished: "20 December 2022",
      status: "Active",
      views: 2890,
      image: "/luxury-apartment-building.png",
      beds: 4,
      baths: 3,
      garage: 2,
      sqft: 1600,
    },
  ]

  const handleEdit = (propertyId) => {
    console.log('Edit property:', propertyId)
    // Bu yerda edit funksiyasini yozasiz
  }

  const handleDelete = (propertyId) => {
    console.log('Delete property:', propertyId)
    // Bu yerda delete funksiyasini yozasiz
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Home className="w-5 h-5 text-slate-800" />
              </div>
              <span className="text-xl font-semibold">Housing</span>
            </div>
            <nav className="flex space-x-8">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Link to="/" className="hover:text-gray-300 transition-colors">
                Home
                </Link>
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Link to="/Properties" className="hover:text-gray-300 transition-colors">
                Properties
                </Link>
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Link to="/Contacts" className="hover:text-gray-300 transition-colors">
                Contacts
                </Link>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My properties</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text"
              placeholder="Search" 
              className="pl-10 w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
        </div>

        {/* Properties Table */}
        <div className="bg-white rounded-[20px] shadow-sm overflow-hidden ">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Listing Title</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Date Published</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">View</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                  <tr key={property.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={property.image || "/placeholder.svg"}
                            alt={property.title}
                            className="w-20 h-16 object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
                              FEATURED
                            </span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-800 text-white">
                              FOR SALE
                            </span>
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-1">{property.title}</h3>
                          <p className="text-sm text-gray-600 mb-1">{property.location}</p>
                          <div className="flex items-center space-x-3 text-xs text-gray-500 mb-1">
                            <span>🏠 {property.beds} Beds</span>
                            <span>🚿 {property.baths} Baths</span>
                            <span>🚗 {property.garage} Garage</span>
                            <span>📐 {property.sqft} Sq Ft</span>
                          </div>
                          <p className="font-semibold text-gray-900">{property.price}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{property.datePublished}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          property.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : property.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {property.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600 font-medium">{property.views.toLocaleString()}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        {/* Edit Button */}
                        <button 
                          onClick={() => handleEdit(property.id)}
                          className="group flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 hover:shadow-md"
                          title="Edit Property"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        
                        {/* Delete Button */}
                        <button 
                          onClick={() => handleDelete(property.id)}
                          className="group flex items-center justify-center w-9 h-9 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 transition-all duration-200 hover:shadow-md"
                          title="Delete Property"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-gray-300" />
                  <div>
                    <p className="text-sm">329 Queensberry Street, North</p>
                    <p className="text-sm">Melbourne VIC 3051, Australia</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-300" />
                  <p className="text-sm">123 456 7890</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-300" />
                  <p className="text-sm">support@housing.com</p>
                </div>
              </div>
            </div>

            {/* Discover */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Discover</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Chicago
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Los Angeles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Miami
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    New York
                  </a>
                </li>
              </ul>
            </div>

            {/* Lists by Category */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Lists by Category</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Apartments
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Condos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Houses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Offices
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Retail
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Villas
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Support Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Home className="w-5 h-5 text-slate-800" />
              </div>
              <span className="text-xl font-semibold">Housing</span>
            </div>

            <div className="flex items-center space-x-6">
              <p className="text-sm text-gray-400">Copyright © 2024 CreativeLayers. All Right Reserved.</p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                ↑
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}