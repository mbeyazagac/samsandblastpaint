import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <div className="text-white font-bold text-xl mb-2">Sand Blasting & Painting</div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Professional mobile sandblasting and industrial painting services with 30+ years of experience.
            </p>
            <a
              href="https://wa.me/15713318485"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-orange-500 transition-colors">Projects</Link></li>
              <li><Link to="/faq" className="hover:text-orange-500 transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-orange-500 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/automotive" className="hover:text-orange-500 transition-colors">Automotive Sandblasting</Link></li>
              <li><Link to="/services/industrial" className="hover:text-orange-500 transition-colors">Industrial Sandblasting</Link></li>
              <li><Link to="/services/commercial" className="hover:text-orange-500 transition-colors">Commercial Sandblasting</Link></li>
              <li><Link to="/services/marine" className="hover:text-orange-500 transition-colors">Marine Sandblasting</Link></li>
              <li><Link to="/services/surface-cleaning" className="hover:text-orange-500 transition-colors">Surface Cleaning</Link></li>
              <li><Link to="/services/truck-chassis" className="hover:text-orange-500 transition-colors">Truck Chassis</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-sm">8013 Quaking Aspen Rd<br />Gainsville, VA 20155</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:+15713318485" className="text-sm hover:text-orange-500 transition-colors">
                  (571) 331-8485
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@ctnsandblasting.com" className="text-sm hover:text-orange-500 transition-colors">
                  info@ctnsandblasting.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Sand Blasting & Painting LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
