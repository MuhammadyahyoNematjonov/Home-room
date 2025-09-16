import React, { useState } from "react";

export default function AddPropertyForm() {
  // State for all inputs
  const [form, setForm] = useState({
    title: "",
    type: "",
    description: "",
    propertyId: "",
    parentProperty: "",
    status: "",
    label: "",
    material: "",
    rooms: "",
    beds: "",
    baths: "",
    garages: "",
    yearBuild: "",
    homeArea: "",
    lotDimensions: "",
    lotArea: "",
    price: "",
    pricePrefix: "",
    priceSuffix: "",
    priceCustom: "",
    regions: "",
    address: "",
    latitude: "",
    longitude: "",
    video: "",
    tour: "",
    amenities: [],
    energyClass: "",
    energyIndex: "",
  });

  // State for images
  const [images, setImages] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [attachment, setAttachment] = useState(null);

  // Amenities list
  const amenitiesList = [
    "Air conditioning","Barbeque","Lawn","Dining Room","Waterfront","Microwave","Fireplace","Parking",
    "Dryer","Outdoor Shower","Pets Allowed","Doorman","Gym","Refrigerator","Unit Washer/Dryer",
    "Central Heating","Laundry","Stunning views","Onsite Parking","Cleaning Service"
  ];

  // Handle input
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        amenities: checked
          ? [...prev.amenities, value]
          : prev.amenities.filter((a) => a !== value)
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  // Handle image upload and preview
  function handleImageUpload(e) {
    const files = Array.from(e.target.files);
    setImages(files.map(file => ({
      file,
      url: URL.createObjectURL(file)
    })));
  }
  function handleGalleryUpload(e) {
    const files = Array.from(e.target.files);
    setGallery(files.map(file => ({
      file,
      url: URL.createObjectURL(file)
    })));
  }
  function handleAttachmentUpload(e) {
    const file = e.target.files[0];
    setAttachment(file);
  }

  // Handle submit for API
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if(Array.isArray(value)) data.append(key, JSON.stringify(value));
      else data.append(key, value);
    });
    images.forEach((img, idx) => data.append(`featuredImage${idx}`, img.file));
    gallery.forEach((img, idx) => data.append(`gallery${idx}`, img.file));
    if(attachment) data.append("attachment", attachment);

    // Example: fetch('/api/properties', { method: "POST", body: data })
    // .then(res => res.json()).then(console.log);
    alert("Form submitted! (API ulash uchun tayyor)");
  }

  return (
    <form className="bg-gray-100 min-h-screen" onSubmit={handleSubmit}>
      {/* Navbar */}
      <nav className="bg-blue-900 text-white px-8 py-4 flex items-center">
        <span className="font-bold text-lg mr-10">Houzing</span>
        <ul className="flex gap-8">
          <li>Home</li>
          <li>Properties</li>
          <li>Contacts</li>
        </ul>
      </nav>

      <div className="max-w-5xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-6">Add new property</h2>

        {/* Contact Information */}
        <section className="bg-white rounded shadow p-6 mb-6">
          <h3 className="font-semibold mb-4">Contact information</h3>
          <div className="grid grid-cols-2 gap-6 mb-4">
            <input name="title" value={form.title} onChange={handleChange} placeholder="Property title*" className="border p-2 rounded" />
            <input name="type" value={form.type} onChange={handleChange} placeholder="Type" className="border p-2 rounded" />
          </div>
          <input name="description" value={form.description} onChange={handleChange} placeholder="Property Description*" className="border p-2 rounded w-full" />
        </section>

        {/* Additional */}
        <section className="bg-white rounded shadow p-6 mb-6">
          <h3 className="font-semibold mb-4">Additional</h3>
          <div className="grid grid-cols-4 gap-4">
            <input name="propertyId" value={form.propertyId} onChange={handleChange} placeholder="Property ID" className="border p-2 rounded" />
            <input name="parentProperty" value={form.parentProperty} onChange={handleChange} placeholder="Parent property" className="border p-2 rounded" />
            <input name="status" value={form.status} onChange={handleChange} placeholder="Status" className="border p-2 rounded" />
            <input name="label" value={form.label} onChange={handleChange} placeholder="Label" className="border p-2 rounded" />
            <input name="material" value={form.material} onChange={handleChange} placeholder="Material" className="border p-2 rounded" />
            <input name="rooms" value={form.rooms} onChange={handleChange} placeholder="Rooms" className="border p-2 rounded" />
            <input name="beds" value={form.beds} onChange={handleChange} placeholder="Beds" className="border p-2 rounded" />
            <input name="baths" value={form.baths} onChange={handleChange} placeholder="Baths" className="border p-2 rounded" />
            <input name="garages" value={form.garages} onChange={handleChange} placeholder="Garages" className="border p-2 rounded" />
            <input name="yearBuild" value={form.yearBuild} onChange={handleChange} placeholder="Year build" className="border p-2 rounded" />
            <input name="homeArea" value={form.homeArea} onChange={handleChange} placeholder="Home area (sqft)" className="border p-2 rounded" />
            <input name="lotDimensions" value={form.lotDimensions} onChange={handleChange} placeholder="Lot dimensions" className="border p-2 rounded" />
            <input name="lotArea" value={form.lotArea} onChange={handleChange} placeholder="Lot area (sqft)" className="border p-2 rounded" />
          </div>
        </section>

        {/* Price */}
        <section className="bg-white rounded shadow p-6 mb-6">
          <h3 className="font-semibold mb-4">Price</h3>
          <div className="grid grid-cols-2 gap-4">
            <input name="price" value={form.price} onChange={handleChange} placeholder="Price ($)" className="border p-2 rounded" />
            <input name="pricePrefix" value={form.pricePrefix} onChange={handleChange} placeholder="Price Prefix" className="border p-2 rounded" />
            <input name="priceSuffix" value={form.priceSuffix} onChange={handleChange} placeholder="Price Suffix" className="border p-2 rounded" />
            <input name="priceCustom" value={form.priceCustom} onChange={handleChange} placeholder="Price Custom" className="border p-2 rounded" />
          </div>
        </section>

        {/* Location */}
        <section className="bg-white rounded shadow p-6 mb-6">
          <h3 className="font-semibold mb-4">Location</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input name="regions" value={form.regions} onChange={handleChange} placeholder="Regions" className="border p-2 rounded" />
            <input name="address" value={form.address} onChange={handleChange} placeholder="Friendly address" className="border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Map location</label>
            <div className="bg-gray-200 h-48 w-full rounded mb-4 flex items-center justify-center text-gray-500">Map here</div>
            <div className="grid grid-cols-2 gap-4">
              <input name="latitude" value={form.latitude} onChange={handleChange} placeholder="Latitude" className="border p-2 rounded" />
              <input name="longitude" value={form.longitude} onChange={handleChange} placeholder="Longitude" className="border p-2 rounded" />
            </div>
          </div>
        </section>

        {/* Media */}
        <section className="bg-white rounded shadow p-6 mb-6">
          <h3 className="font-semibold mb-4">Media</h3>
          <div className="flex gap-4 mb-4">
            {images.map((img, i) => (
              <img key={i} src={img.url} alt="preview" className="h-16 w-16 rounded object-cover" />
            ))}
            {images.length < 3 && (
              <label className="bg-gray-300 h-16 w-16 rounded flex items-center justify-center cursor-pointer">
                <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
                <span className="text-gray-500">+</span>
              </label>
            )}
          </div>
          <div className="flex gap-6 mb-4">
            <div>
              <label>Gallery</label>
              <input type="file" multiple accept="image/*" onChange={handleGalleryUpload} className="block" />
              <div className="flex gap-2 mt-1">
                {gallery.map((img, i) => <img key={i} src={img.url} alt="" className="h-12 w-12 object-cover rounded" />)}
              </div>
            </div>
            <div>
              <label>Attachment</label>
              <input type="file" accept=".pdf,.doc,.docx" onChange={handleAttachmentUpload} className="block" />
              {attachment && <span className="text-sm">{attachment.name}</span>}
            </div>
          </div>
          <input name="video" value={form.video} onChange={handleChange} placeholder="Video link" className="border p-2 rounded w-full mb-2" />
          <input name="tour" value={form.tour} onChange={handleChange} placeholder="Virtual tour" className="border p-2 rounded w-full" />
        </section>

        {/* Amenities */}
        <section className="bg-white rounded shadow p-6 mb-6">
          <h3 className="font-semibold mb-4">Amenities</h3>
          <div className="grid grid-cols-4 gap-2">
            {amenitiesList.map((item, i) => (
              <label key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={item}
                  checked={form.amenities.includes(item)}
                  onChange={handleChange}
                  className="accent-blue-700"
                />
                {item}
              </label>
            ))}
          </div>
        </section>

        {/* Energy Class */}
        <section className="bg-white rounded shadow p-6 mb-6">
          <h3 className="font-semibold mb-4">Select Energy Class</h3>
          <div className="grid grid-cols-2 gap-4">
            <input name="energyClass" value={form.energyClass} onChange={handleChange} placeholder="Energy class" className="border p-2 rounded" />
            <input name="energyIndex" value={form.energyIndex} onChange={handleChange} placeholder="Energy Index in kWh/m2a" className="border p-2 rounded" />
          </div>
        </section>

        <button type="submit" className="bg-blue-600 text-white px-10 py-2 rounded float-right mb-12">Submit</button>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-8 mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
            <p>123 456 7890</p>
            <p>support@ihouzing.com</p>
            <div className="flex gap-2 mt-2">
              <span>Fb</span>
              <span>Tw</span>
              <span>Ig</span>
              <span>In</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Discover</h4>
            <ul>
              <li>Chicago</li>
              <li>Los Angeles</li>
              <li>Miami</li>
              <li>New York</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Lists by Category</h4>
            <ul>
              <li>Apartments</li>
              <li>Condos</li>
              <li>Houses</li>
              <li>Offices</li>
              <li>Retail</li>
              <li>Villas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Lists by Category</h4>
            <ul>
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Support Center</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          Copyright © 2021 CreativeLayers. All Right Reserved.
        </div>
      </footer>
    </form>
  );
}