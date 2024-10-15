import React,{useState} from 'react';
const logo = new URL('../images/logo.jpg', import.meta.url);
const app = new URL('../images/mobile_app.png', import.meta.url);
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

const Mobileapp_development = () => {
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

      <section className="text-center my-8">
        <h2 className="text-3xl font-bold mb-4">MOBILE APP DEVELOPMENT</h2>
        <p className="mb-4">At Next Web, we develop custom software that meets the specific needs and requirements of businesses in many different industries...</p>
        <img src={app} alt="Mobile App" className="mx-auto mb-4 h-[30%] w-[40%]" />
      </section>

      {/* What We Do */}
      <div className="my-8 mx-10">
        <h3 className="text-2xl font-bold mb-4">What We Do</h3>
        <details className="mb-2">
          <summary className="cursor-pointer text-lg font-semibold">Custom Mobile App Development</summary>
          <p>We make mobile apps that are unique to your business and fit its needs...</p>
        </details>
        <details className="mb-2">
          <summary className="cursor-pointer text-lg font-semibold">Cross-platform Mobile App Development</summary>
          <p>We use Flutter to make mobile apps that work on both Android and iOS...</p>
        </details>
        <details className="mb-2">
          <summary className="cursor-pointer text-lg font-semibold">Mobile App Integration</summary>
          <p>We help you connect your mobile app to your existing IT infrastructure...</p>
        </details>
        <details className="mb-2">
          <summary className="cursor-pointer text-lg font-semibold">Mobile App Testing and QA</summary>
          <p>Our mobile app testing and quality assurance services make sure that your mobile app is free of bugs...</p>
        </details>
      </div>

      {/* How We Do */}
      <div className="my-8 mx-10">
        <h3 className="text-2xl font-bold mb-4">How We Do</h3>
        <p>Next Web follows a well-defined process for software development that ensures our clients receive the highest quality software on time and within budget. Our software development methodology is founded on collaboration, communication, and openness.</p>
      </div>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center">    
          <img src={discovery} alt="Discovery" className="mx-auto mb-2 h-72" />
          <h4 className="font-bold">Discovery</h4>
          <p>During this phase, we collaborate closely with our clients to determine their needs...</p>
        </div>
        <div className="text-center">
          <img src={design} alt="Design" className="mx-auto mb-2 h-72" />
          <h4 className="font-bold">Web Design</h4>
          <p>Following the conclusion of the discovery phase, we enter the design phase...</p>
        </div>
        <div className="text-center">
          <img src={development} alt="Development" className="mx-auto mb-2  h-72" />
          <h4 className="font-bold">Development</h4>
          <p>Following the completion of the design phase, we enter the development phase...</p>
        </div>
        <div className="text-center">
          <img src={deployment} alt="Deployment" className="mx-auto mb-2 h-72" />
          <h4 className="font-bold">Deployment</h4>
          <p>Following the conclusion of the development phase, we enter the deployment phase...</p>
        </div>
        <div className="text-center">
          <img src={maintanance} alt="Maintenance" className="mx-auto mb-2 h-72" />
          <h4 className="font-bold">Maintenance</h4>
          <p>Finally, once the software has been deployed, we will enter the maintenance phase...</p>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="my-8 mx-10">
        <h1 className="text-2xl font-bold mb-4 ">Technology Stack</h1>
        <p>Our mobile app development service uses a variety of technologies,
     frameworks, and programming languages to make high-quality mobile apps that meet
     the needs of our clients. Our tech stack consists of..</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-10">
        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-bold">Flutter</h2>
          <p>We use Flutter to make mobile apps that work on both Android and iOS devices...</p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-bold">Native App Development</h2>
          <p>When we make apps for Android, we use native technologies like Java and Kotlin...</p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-bold">Back-end Development</h2>
          <p>To build the server-side logic for mobile apps, we use a variety of back-end technologies...</p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-bold">Cloud Computing Services</h2>
          <p>We offer cloud computing services using Amazon Web Services (AWS)...</p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-bold">Mobile App Analytics</h2>
          <p>We use mobile app analytics tools like Google Analytics...</p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-bold">Mobile App Testing</h2>
          <p>We use testing frameworks and tools like Appium...</p>
        </div>
      </div>

      {/* Footer */}
      <hr className="my-8 border-t" />
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

export default Mobileapp_development;
