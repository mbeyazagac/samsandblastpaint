import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from './Button';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Services', path: '/services' },
        { name: 'Automotive Sandblasting', path: '/services/automotive' },
        { name: 'Industrial Sandblasting', path: '/services/industrial' },
        { name: 'Commercial Sandblasting', path: '/services/commercial' },
        { name: 'Marine Sandblasting', path: '/services/marine' },
        { name: 'Surface Cleaning', path: '/services/surface-cleaning' },
        { name: 'Truck Chassis', path: '/services/truck-chassis' },
      ]
    },
    { name: 'Projects', path: '/projects' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="hidden md:block">
              <div className="text-white font-bold text-xl">Sand Blasting & Painting</div>
              <div className="text-orange-500 text-xs">30+ Years of Excellence</div>
            </div>
            <div className="md:hidden">
              <div className="text-white font-bold text-lg">Sand Blasting & Painting</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="text-gray-300 hover:text-orange-500 font-medium transition-colors flex items-center space-x-1">
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl py-2">
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.path}
                          to={dropItem.path}
                          className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-orange-500 transition-colors"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-300 hover:text-orange-500 font-medium transition-colors ${
                    location.pathname === item.path ? 'text-orange-500' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+15713318485" className="flex items-center text-white hover:text-orange-500 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold">(571) 331-8485</span>
            </a>
            <Button to="/contact" variant="primary" size="sm">
              Request a Quote
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full text-left text-gray-300 hover:text-orange-500 font-medium py-2 flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 space-y-2 mt-2">
                        {item.dropdownItems?.map((dropItem) => (
                          <Link
                            key={dropItem.path}
                            to={dropItem.path}
                            className="block text-gray-400 hover:text-orange-500 py-1 text-sm"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block text-gray-300 hover:text-orange-500 font-medium py-2 ${
                      location.pathname === item.path ? 'text-orange-500' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-700">
              <a
                href="tel:+15713318485"
                className="flex items-center justify-center text-white hover:text-orange-500 py-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">(571) 331-8485</span>
              </a>
              <Button to="/contact" variant="primary" className="w-full">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
