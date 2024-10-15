import React, { useState } from 'react';
import "../Css/Home.css";

const logo = new URL('../images/logo.jpg', import.meta.url);
const web = new URL("../images/web deve.jpg", import.meta.url);
const app = new URL("../images/app.png", import.meta.url);
const software = new URL("../images/software.jpg", import.meta.url);
const commerce = new URL("../images/commerce.jpeg", import.meta.url);
const marketing = new URL("../images/marketing.png", import.meta.url);
const insta = new URL("../images/instagram.png", import.meta.url);
const facebook = new URL("../images/facebook.png", import.meta.url);
const linkedin = new URL("../images/linkedin.png", import.meta.url);
const phone = new URL("../images/phone.png", import.meta.url);
const mail = new URL("../images/mail.jpeg", import.meta.url);
const address = new URL("../images/address.png", import.meta.url);
const agility = new URL("../images/agility.jpeg", import.meta.url);
const collaboration = new URL("../images/collaboration.jpeg", import.meta.url);
const customization = new URL("../images/customaization.jpeg", import.meta.url);
const quality = new URL("../images/quality.jpg", import.meta.url);
const innovation = new URL("../images/innovation.png", import.meta.url);

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-100">
      <div className="bg-white shadow-md">
        <div className="flex items-center justify-between p-6">
          <img src={logo} alt="Logo" className="h-16 w-28" />
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
          
          {/* Navigation Menu */}
          <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-4">
              <li><a href="/" className="text-gray-700 hover:bg-blue-300 py-2 md:px-4">Home</a></li>
              <li><a href="#about" className="text-gray-700 hover:bg-blue-300 py-2 md:px-4">About Us</a></li>
              <li className="relative group">
                <a href="#our-services" className="text-gray-700 hover:bg-blue-300 py-2 md:px-4">Our Services</a>
                <div className="absolute left-0 hidden mt-1 bg-white shadow-lg group-hover:block z-20">
                  <ul className="flex flex-col ">
                    <li><a href="/Website_development" className="block px-4 py-2 hover:bg-gray-200">Website Development</a></li>
                    <li><a href="/Mobileapp_development" className="block px-4 py-2 hover:bg-gray-200">App Development</a></li>
                    <li><a href="/Software_development" className="block px-4 py-2 hover:bg-gray-200">Software Development</a></li>
                    <li><a href="/Marketing" className="block px-4 py-2 hover:bg-gray-200">Marketing</a></li>
                    <li><a href="/Ecommerce" className="block px-4 py-2 hover:bg-gray-200">E-Commerce</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="#career" className="text-gray-700 hover:bg-blue-300 py-2 md:px-4">Career</a></li>
              <li><a href="#" className="text-gray-700 hover:bg-blue-300 py-2 md:px-4">Support</a></li>
              <li><a href="/contact" className="text-gray-700 hover:bg-blue-300 py-2 md:px-4">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className='photo'></div>
      <div className='head'></div>

      <div className="text-center py-20">
        {['Software Development', 'Mobile App Development', 'Website Development', 'Marketing', 'E-Commerce'].map((title, index) => (
          <h3 key={index} className="text-3xl font-semibold">{title}</h3>
        ))}
      </div>

      <div className="text-center py-10">
        <h2 className="text-2xl font-bold">Services Provided by Next Web</h2>
        <hr className="my-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-8">
        {[
          { img: web, title: "Website Development", description: "Next Web skilled website building helps boost your online image..." },
          { img: app, title: "Mobile App Development", description: "With Next Web custom mobile app development service, you can improve your online visibility..." },
          { img: software, title: "Software Development", description: "Next Web professional software creation services can help your business grow..." },
          { img: commerce, title: "E-Commerce Development", description: "With Next Web E-commerce Development Service, you can start your path to digital success..." },
          { img: marketing, title: "Marketing", description: "Next Web Marketing Service helps you grow your business online..." },
        ].map(service => (
          <div key={service.title} className="bg-white p-4 shadow-md rounded-lg">
            <img src={service.img} alt={service.title} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-bold mt-2">{service.title}</h2>
            <p className="mt-2">{service.description}</p>
            <a href={`/${service.title.replace(/\s+/g, '_')}`}>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Read More</button>
            </a>
          </div>
        ))}
      </div>

      <div className="text-center py-10">
        <h2 className="text-2xl font-bold">Why Choose Next Web</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {[
          { img: quality, title: "Quality", description: "Dedicated to providing services that go above and beyond for our customers." },
          { img: customization, title: "Customization", description: "Our services are custom-made to accommodate the specific demands of each individual company." },
          { img: innovation, title: "Innovation", description: "Our forward-thinking approach allows us to create solutions that propel the expansion and modernization of companies." },
          { img: agility, title: "Agility", description: "Our methods are agile, and the solutions we provide are versatile enough to meet the evolving demands of any given firm." },
          { img: collaboration, title: "Collaboration", description: "We have a teamwork-oriented strategy, closely collaborating with our customers to find win-win solutions." },
        ].map(feature => (
          <div key={feature.title} className="bg-white p-4 shadow-md rounded-lg text-center">
            <img src={feature.img} alt={feature.title} className="w-full h-32 object-cover mb-2" />
            <h3 className="font-bold">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
 {/* Footer */}
 <footer className="flex flex-col items-center">
 <div className="flex space-x-4 mb-4">
          <a href="https://www.instagram.com/blue_crazy_official?igsh=cmF6OGs2aGxzc2U2"><img src={insta} alt="Instagram" className="h-8 hover:-translate-y-3 transition" /></a>
          <a href="https://www.facebook.com/"><img src={facebook} alt="Facebook" className="h-8 hover:-translate-y-3 transition" /></a>
          <a href="https://www.linkedin.com/in/kannan-n-78809b287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkedin} alt="LinkedIn" className="h-8 hover:-translate-y-3 transition" /></a>
        </div>
        <div className="flex items-center space-x-2">
          <img src={phone} alt="Phone" className="h-6" /><span>+9927387829</span>
          <img src={mail} alt="Mail" className="h-6" /><span>Nextweb@gmail.com</span>
          <img src={address} alt="Address" className="h-6" /><span>Pudukkottai Main Road</span>
        </div>
      </footer>
    </header>
  );
};

export default Home;
