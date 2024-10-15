import React,{useState} from 'react';
const logo = new URL('../images/logo.jpg', import.meta.url);
const marketing = new URL("../images/marketing1.png", import.meta.url);
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

const Marketing = () => {
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



      {/* Market Section */}
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-4xl font-bold">MARKETING</h2>
        <p className="mt-4 text-gray-700">
          In today’s digital age, a website is essential for the success of any business...
        </p>
        <p className="mt-2 text-gray-700">
          To keep your website running smoothly and safely, we also provide ongoing support...
        </p>
        <img src={marketing} alt="Marketing" className="mt-6" />
      </div>

      {/* What We Do */}
      <div className=" mx-10 p-6">
        <h3 className="text-3xl font-semibold">What We Do</h3>
        <div className="space-y-4 mt-4">
          <details className="border p-4 rounded-md">
            <summary className="cursor-pointer font-medium">Strategic Planning and Analysis</summary>
            <p>We’ll work with you to identify your business goals and objectives, and develop a
       comprehensive software strategy that aligns with your vision. Our team will conduct a thorough analysis of your existing software infrastructure, identify any inefficiencies or opportunities for improvement, and develop a plan that is
       tailored to your unique needs and requirements.</p>
          </details>
          <details className="border p-4 rounded-md">
            <summary className="cursor-pointer font-medium">Research</summary>
            <p>Review of your business and its goals
Analysis of your offline and online competitors
Research and update of your target persona and audience</p> 
          </details>
          <details className="border p-4 rounded-md">
            <summary className="cursor-pointer font-medium">Digital Strategy</summary>
            <p>
    Review marketing and digital strategy options
    Assess budget / business case
    Prioritize and select strategic initiatives</p>
          </details>
          <details className="border p-4 rounded-md">
            <summary className="cursor-pointer font-medium">Sell Product Online</summary>
            <p>If you sell products online, we can integrate capabilities into your website so that customers 
            can make purchases directly from your site.</p> 
          </details>
        </div>
      </div>

      {/* How We Do */}
      <div className="mx-10   p-6">
        <h3 className="text-3xl font-semibold">How We Do</h3>
        <p className="mt-4 text-gray-700">
          Next Web follows a well-defined process for software development...
        </p>
      </div>

      <div className="flex flex-wrap justify-around  mx-10  ">
        {[
          { image: discovery, title: 'Discovery', description: 'During this phase, we collaborate closely...' },
          { image: design, title: 'Web Design', description: 'Following the conclusion of the discovery phase...' },
          { image: development, title: 'Development', description: 'Following the completion of the design phase...' },
          { image: deployment, title: 'Deployment', description: 'Following the conclusion of the development phase...' },
          { image: maintanance, title: 'Maintenance', description: 'Finally, once the software has been deployed...' }
        ].map(({ image, title, description }) => (
          <div key={title} className="flex flex-col  items-center p-4 border rounded-md m-2">
            <img src={image} alt={title} className="h-44 w-60" />
            <h4 className="text-xl font-semibold">{title}</h4>
            <p className="text-gray-700 text-center">{description}</p>
          </div>
        ))}
      </div>

      {/* Technology Stack */}
      <div className="max-w-4xl mx-10  p-6">
        <h1 className="text-3xl font-semibold">Technology Stack</h1>
        <p className="mt-4 text-gray-700">Our software consultants and developers have expertise...</p>
      </div>

      <div className="max-w-4xl mx-10  grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        {[
          { title: 'SEO', description: 'Search engine optimization is the process...' },
          { title: 'Content Management', description: 'We have experience with popular CMS platforms...' },
          { title: 'Google Ads', description: 'Google Ads tool for managing campaigns...' },
          { title: 'Version Control', description: 'Tools like Git for version control...' },
          { title: 'Tools', description: 'Canva, SEO, Google Ads, Sprout Social...' },
          { title: 'Marketing', description: 'We have expertise with Magento, Shopify...' }
        ].map(({ title, description }) => (
          <div key={title} className="border p-4 rounded-md">
            <h2 className="font-semibold">{title}</h2>
            <p className="text-gray-700">{description}</p>
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
}

export default Marketing;
