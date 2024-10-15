import React,{useState} from 'react';
const logo = new URL('../images/logo.jpg', import.meta.url);
const websitedevelopment = new URL("../images/website development.jpg", import.meta.url);
const discovery = new URL("../images/dicovery.png", import.meta.url);
const design = new URL("../images/web design.png", import.meta.url);
const development = new URL("../images/development.png", import.meta.url);
const deployment = new URL("../images/deployment.png", import.meta.url);
const maintanance = new URL("../images/maintanance.jpg", import.meta.url);
const insta = new URL("../images/instagram.png", import.meta.url);
const facebook = new URL("../images/facebook.png", import.meta.url);
const linkedin = new URL("../images/linkedin.png", import.meta.url);
const phone = new URL("../images/phone.png", import.meta.url);
const mail = new URL("../images/mail.jpeg", import.meta.url);
const address = new URL("../images/address.png", import.meta.url);

const Website_development = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100">
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
        
      

      {/* Main Content */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">WEBSITE DEVELOPMENT</h2>
        <p className="mt-4">In today’s digital age, a website is essential for the success of any business. A website functions as a digital storefront, providing customers with information about your products and services, as well as a method for contacting you and making purchases.</p>
        <p className="mt-2">Our website development service specializes in the creation of customized websites that are tailored to your business’s particular requirements and goals.</p>
        <img src={websitedevelopment} alt="Website Development" className="mt-4 mx-auto w-full max-w-lg" />
      </div>

      {/* What We Do */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-center">What We Do</h3>
        <div className="space-y-4">
          {[
            { title: "Design and Development", description: "Our designers and developers collaborate to create a visually appealing, user-friendly, and conversion-optimized website." },
            { title: "Content Creation", description: "We assist you in developing high-quality, search engine and audience-optimized content." },
            { title: "SEO Services", description: "We optimize your website for search engines to increase its visibility and attract more visitors." },
            { title: "Responsive Design", description: "We develop websites that are responsive and mobile-friendly." },
            { title: "Sell Products Online", description: "We can integrate e-commerce capabilities into your website." },
          ].map(item => (
            <details key={item.title} className="bg-gray-100 p-4 rounded shadow-md">
              <summary className="cursor-pointer font-semibold">{item.title}</summary>
              <p className="mt-2">{item.description}</p>
            </details>
          ))}
        </div>
      </div>

      {/* How We Do */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-center">How We Do</h3>
        <p className="mt-4 text-center">Next Web follows a well-defined process for software development that ensures our clients receive the highest quality software on time and within budget. Our software development methodology is founded on collaboration, communication, and openness.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {[
          { img: discovery, title: "Discovery", description: "Collaborate closely with clients to determine their needs, objectives, and goals." },
          { img: design, title: "Web Design", description: "Develop a detailed design specification for the software's architecture." },
          { img: development, title: "Development", description: "Construct the software according to the design specification." },
          { img: deployment, title: "Deployment", description: "Deploy the software to the production environment." },
          { img: maintanance, title: "Maintenance", description: "Provide ongoing support and maintenance." },
        ].map(item => (
          <div key={item.title} className="p-4 bg-white shadow-md rounded-lg text-center">
            <img src={item.img} alt={item.title} className="w-full h-32 object-cover mb-2" />
            <h4 className="font-bold">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Technology Stack */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center">Technology Stack</h1>
        <p className="mt-4 text-center">We use a variety of technologies and tools to create customized, high-quality websites.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          { title: "Front-end Technologies", description: "HTML5, CSS3, and JavaScript are used to create the website’s visual design." },
          { title: "Content Management System", description: "Experience with WordPress, Drupal, and Joomla." },
          { title: "Server-side Technologies", description: "Using PHP, Ruby on Rails, and Node.js for server-side functionality." },
          { title: "Version Control", description: "Using Git and GitHub for code management." },
          { title: "Web Applications", description: "Using React, AngularJS, and Vue.js for scalable applications." },
          { title: "E-commerce", description: "Expertise with Magento, Shopify, and WooCommerce." },
        ].map(item => (
          <div key={item.title} className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="font-bold">{item.title}</h2>
            <p>{item.description}</p>
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
    </div>
  );
};

export default Website_development;
