import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-greenbell-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-greenbell-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">GREENBELL</h3>
                <p className="text-xs text-greenbell-300 -mt-1">SHADES & CANOPIES</p>
              </div>
            </div>
            <p className="text-sm text-greenbell-300 leading-relaxed">
              Premium shade solutions transforming outdoor spaces across Kenya since 2022.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-greenbell-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-greenbell-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-greenbell-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/gallery" className="text-greenbell-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-greenbell-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-greenbell-300">Canopy Manufacturing</li>
              <li className="text-greenbell-300">Tent & Marquee</li>
              <li className="text-greenbell-300">Car Shades</li>
              <li className="text-greenbell-300">Custom Tarpaulins</li>
              <li className="text-greenbell-300">Maintenance Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-greenbell-300 flex items-start gap-2">
                <span>📍</span>
                <span>R Astrol Business Center, Nairobi</span>
              </li>
              <li className="text-greenbell-300 flex items-center gap-2">
                <span>📞</span>
                <span>+254 716 807 767</span>
              </li>
              <li className="text-greenbell-300 flex items-center gap-2">
                <span>✉️</span>
                <span>info@greenbellshades.co.ke</span>
              </li>
              <li className="text-greenbell-300 flex items-center gap-2">
                <span>🌐</span>
                <span>www.greenbellshades.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-greenbell-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-greenbell-400">
          <p>© {currentYear} GREENBELL GROUP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;