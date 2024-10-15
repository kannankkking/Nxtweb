import React, { useState } from 'react';
const logo = new URL('../images/logo.jpg', import.meta.url);
const ecommerce = new URL('../images/ecommerce.jpeg', import.meta.url);
const discovery = new URL('../images/discovery.png', import.meta.url);
const design = new URL('../images/web_design.png', import.meta.url);
const development = new URL('../images/development.png', import.meta.url);
const deployment = new URL('../images/deployment.png', import.meta.url);
const maintenance = new URL('../images/maintenance.jpg', import.meta.url);
const insta = new URL('../images/instagram.png', import.meta.url);
const facebook = new URL('../images/facebook.png', import.meta.url);
const linkedin = new URL('../images/linkedin.png', import.meta.url);
const phone = new URL('../images/phone.png', import.meta.url);
const mail = new URL('../images/mail.jpeg', import.meta.url);
const address = new URL('../images/address.png', import.meta.url);

const Ecommerce = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="flex items-center justify-between p-6">
          <img src={logo} alt="Logo" className="h-16 w-28" />
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
          <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-4">
              <li><a href="/" className="text-gray-700 hover:bg-blue-300 py-2 md:px-4">Home</a></li>
              <li><a href="#about" className="text-gray-700 hover:bg-blue-300 py-2 md:px-4">About Us</a></li>
              <li className="relative group">
                <a href="#our-services" className="text-gray-700 hover:bg-blue-300 py-2 md:px-4">Our Services</a>
                <div className="absolute left-0 hidden mt-1 bg-white shadow-lg group-hover:block z-20">
                  <ul className="flex flex-col">
                    <li><a href="/Website_development" className="block px-4 py-2 hover:bg-gray-200">Website Development</a></li>
                    <li><a href="/Mobileapp_development" className="block px-4 py-2 hover:bg-gray-200">App Development</a></li>
                    <li><a href="/Software_development" className="block px-4 py-2 hover:bg-gray-200">Software Development</a></li>
                    <li><a href="/Marketing" className="block px-4 py-2 hover:bg-gray-200">Marketing</a></li>
                    <li><a href="/Ecommerce" className="block px-4 py-2 hover:bg-gray-200">E-Commerce</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="#career" className="text-gray-700 hover:bg-blue-300 py-2 md:px-4">Career</a></li>
              <li><a href="#support" className="text-gray-700 hover:bg-blue-300 py-2 md:px-4">Support</a></li>
              <li><a href="/contact" className="text-gray-700 hover:bg-blue-300 py-2 md:px-4">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Title */}
      <section className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-4xl font-bold">E-COMMERCE</h2>
        <p className="mt-4 text-gray-700">
          Our ecommerce development service helps businesses sell their goods and services online by making custom ecommerce solutions. Our team of experienced developers builds ecommerce sites that are safe, scalable, and easy to use with a variety of technologies and frameworks.
        </p>
        <p className="mt-2 text-gray-700">
          We provide a comprehensive range of ecommerce development services, from the design and development of custom websites to the integration of shopping carts and payment gateways, helping companies achieve online success.
        </p>
        <img src={ecommerce} alt="E-commerce" className="mt-6 w-full" />
      </section>

      {/* What We Do */}
      <section className="mx-10">
        <h3 className="text-3xl font-semibold">What We Do</h3>
        <div className="mt-4 space-y-4 flex flex-col justify-start">
          <details className="border p-4 rounded-md">
            <summary className="cursor-pointer font-medium">Custom Design</summary>
            <p>We create visually appealing, user-friendly ecommerce sites optimized for sales.</p>
          </details>
          <details className="border p-4 rounded-md">
            <summary className="cursor-pointer font-medium">Responsive Design</summary>
            <p>Our designs ensure compatibility across desktops, laptops, tablets, and smartphones.</p>
          </details>
          <details className="border p-4 rounded-md">
            <summary className="cursor-pointer font-medium">E-commerce Platforms</summary>
            <p>We utilize various ecommerce platforms, such as Shopify, WooCommerce, and Magento.</p>
          </details>
          {/* Add other details similarly */}
        </div>
      </section>

      {/* How We Do */}
      <section className="max-w-4xl mx-10 p-6">
        <h3 className="text-3xl font-semibold">How We Do</h3>
        <p className="mt-4 text-gray-700">
          Our structured software development process ensures high-quality results delivered on time and within budget.
        </p>
      </section>

      {/* Process Steps */}
      <div className="flex flex-wrap justify-around max-w-4xl mx-auto">
        {[
          { image: discovery, title: 'Discovery', description: 'Understanding project requirements and goals.' },
          { image: design, title: 'Web Design', description: 'Creating intuitive and appealing designs.' },
          { image: development, title: 'Development', description: 'Building scalable and secure applications.' },
          { image: deployment, title: 'Deployment', description: 'Launching the ecommerce platform.' },
          { image: maintenance, title: 'Maintenance', description: 'Providing ongoing support and updates.' }
        ].map(({ image, title, description }) => (
          <div key={title} className="flex flex-col items-center p-4 border rounded-md m-2">
            <img src={image} alt={title} className="h-52 w-60" />
            <h4 className="text-xl font-semibold">{title}</h4>
            <p className="text-gray-700 text-center">{description}</p>
          </div>
        ))}
      </div>

      {/* Technology Stack */}
      <section className="max-w-4xl mx-10 p-6">
        <h1 className="text-3xl font-semibold">Technology Stack</h1>
        <p className="mt-4 text-gray-700">
          Our ecommerce solutions leverage a variety of technologies and frameworks tailored to meet your business needs.
        </p>
      </section>

      <div className="max-w-4xl mx-10 grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        {[
          { title: 'E-Commerce Platform', description: 'We work with various ecommerce platforms to ensure flexibility.' },
          { title: 'Front-end Technologies', description: 'Utilizing technologies for responsive and user-friendly interfaces.' },
          { title: 'Back-end Technologies', description: 'Employing scalable and secure server-side solutions.' },
          { title: 'Databases', description: 'Managing and storing your ecommerce data efficiently.' },
          { title: 'Payment Gateway Integration', description: 'Seamlessly integrating various payment options.' },
          { title: 'Shipping Integration', description: 'Implementing shipping solutions for streamlined logistics.' },
          { title: 'Security and Compliance', description: 'Ensuring your site meets all security standards.' },
          { title: 'Analytics and Reporting', description: 'Utilizing tools for comprehensive performance insights.' }
        ].map(({ title, description }) => (
          <div key={title} className="border p-4 rounded-md">
            <h2 className="font-semibold">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="flex flex-col items-center p-6 bg-white">
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
    </div>
  );
}

export default Ecommerce;
