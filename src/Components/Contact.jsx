import React,{useState} from 'react'
const logo = new URL('../images/logo.jpg', import.meta.url);

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen((prev) => !prev);
    };
  
    return (
      <div className="bg-gray-100">
        <div className="bg-white shadow-md">
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
        
      
      <div className='bg-gray-100'>
      <h1 className='mt-3 text-4xl mx-10 mb-4'>Get in Touch</h1>
      <div className="mx-10 form ">
          <form className="flex flex-col w-96 gap-8 " action="">
              Name :<input type="text" className="rounded-md h-8 border hover:outline " />
              Email :<input type="email" className="rounded-md h-8 border hover:outline" />
              Subject :<input type="text" className="rounded-md h-8 border hover:outline" />
              Message:<textarea className="h-8 rounded-md border hover:outline" />
              <a><button className="bg-blue-800 p-2 mt-5 rounded-md w-20 text-white hover:-translate-y-2 transition hover:text-black">Send</button></a>
          </form>
      </div>
  </div>
  </div>
  </div>
  );
  }
export  default Contact;