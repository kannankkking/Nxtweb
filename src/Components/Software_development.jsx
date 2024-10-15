import React,{useState} from 'react';
const logo = new URL('../images/logo.jpg', import.meta.url);
const software = new URL("../images/software development.jpeg", import.meta.url);
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

const Software_development = () => {
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


      <main className="p-6">
        <section className="text-center">
          <h2 className="text-4xl font-bold">SOFTWARE DEVELOPMENT</h2>
          <p className="mt-4 text-lg">At Next Web, we develop custom software that meets the specific needs and requirements of businesses in many different industries. Our team of experienced developers works closely with clients to understand their business processes, find inefficiencies, and design and implement a custom software solution that streamlines operations, cuts costs, and increases profits.</p>
          <p>Our custom software development services cover a wide range of uses, such as project management, supply chain management, inventory management, human resources, and accounting. We use the most up-to-date technologies and development methods to create high-quality, scalable, and flexible solutions that can be changed to meet the changing needs of businesses.</p>
          <img src={software} alt="Software Development" className="my-4 mx-auto w-[50%]" />
        </section>

        <section className="mt-8">
          <h3 className="text-3xl font-semibold">Why We Do</h3>
          <details className="mt-4">
            <summary className="cursor-pointer font-medium">Software Design and Architecture</summary>
            <p>Before beginning any project, we ensure that we fully understand your requirements...</p>
          </details>
          <details>
    <summary>Software Development</summary>
    <p>To create scalable, reliable, and secure software solutions, our developers use the most recent programming languages and technologies. We use the best software development methods to ensure that the software we deliver is the best it can be.</p>
   </details>

  <details>
    <summary>Software testing and quality assurance</summary>
    <p>We all know that testing and quality assurance are critical to the success of any software project. Our testing team performs thorough testing to find and fix bugs, as well as to ensure that the software meets your requirements.</p>
    </details>

    <details>
    <summary>Maintanance and support</summary>
    <p>We provide ongoing maintenance and support services to ensure that your software continues to function properly after it has been released. We also provide support for any issues that may arise following deployment.</p>
      </details>
        </section>

        <section className="mt-8">
          <h3 className="text-3xl font-semibold">How We Do</h3>
          <p className="mt-2">Next Web follows a well-defined process for software development that ensures our clients receive the highest quality software on time and within budget. Our software development methodology is founded on collaboration, communication, and openness.</p>
        </section>

        {/* Process Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {[
            { img: discovery, title: "Discovery", description: "During this phase, we collaborate closely..." },
            { img: design, title: "Web Design", description: "Following the conclusion of the discovery phase..." },
            { img: development, title: "Development", description: "Following the completion of the design phase..." },
            { img: deployment, title: "Deployment", description: "Following the conclusion of the development phase..." },
            { img: maintanance, title: "Maintenance", description: "Finally, once the software has been deployed..." },
          ].map(({ img, title, description }) => (
            <div className="border p-4 rounded shadow-md" key={title}>
              <img src={img} alt={title} className="mb-2" />
              <h4 className="text-xl font-bold">{title}</h4>
              <p>{description}</p>
            </div>
          ))}
        </div>

        <section className="mt-8">
          <h1 className="text-3xl font-semibold">Technology Stack</h1>
          <p className="mt-2">Our software development service uses a wide range of technologies...</p>
        </section>

        {/* Technology Stack Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {[
            { title: "Front-end Development", description: "We build the front ends of web apps..." },
            { title: "Back-end Development", description: "We use PHP, Python, Ruby on Rails..." },
            { title: "Database Management", description: "We use a variety of database technologies..." },
            { title: "Cloud Computing Services", description: "We can help you store, manage, and access..." },
            { title: "Mobile Development", description: "We use Flutter to make mobile apps..." },
            { title: "DevOps", description: "We use DevOps tools and methods like Git..." },
          ].map(({ title, description }) => (
            <div className="border p-4 rounded shadow-md" key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p>{description}</p>
            </div>
          ))}
        </div>

        <section className="mt-8 text-center">
          <h2 className="text-2xl font-semibold">Digital Marketing</h2>
          <p className="mt-2">Help customers find your products with ads that appear in related shopping results and product pages.</p>
          <p>Make your brand and products stand out with engaging creative formats.</p>
        </section>

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
      </main>
    </div>
  );
}

export default Software_development;
