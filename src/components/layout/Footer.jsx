import React from 'react';
import { Link } from 'react-router-dom';
import { servicesList } from '../../data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const featuredServices = servicesList.slice(0, 6);

  return (
    <footer className="bg-greenbell-900 text-greenbell-100">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="Greenbell Group logo" className="h-14 w-auto rounded-full border-2 border-greenbell-400" />
              <div>
                <h3 className="font-bold text-lg leading-tight text-white">GREENBELL</h3>
                <p className="text-xs text-greenbell-200 -mt-1">SHADES & CANOPIES</p>
              </div>
            </div>
            <p className="text-sm text-greenbell-200 leading-relaxed">
              Premium shade solutions transforming outdoor spaces across Kenya since 2022.
            </p>
            <p className="mt-3 text-sm font-semibold text-white">Shade Your World with the Best</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-greenbell-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-greenbell-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-greenbell-100 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/gallery" className="text-greenbell-100 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/car-shade-prices" className="text-greenbell-100 hover:text-white transition-colors">Car Shade Prices</Link></li>
              <li><Link to="/contact" className="text-greenbell-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {featuredServices.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-greenbell-100 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-greenbell-100 flex items-start gap-2">
                <span>📍</span>
                <span>R Astrol Business Center, Nairobi</span>
              </li>
              <li className="text-greenbell-100 flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+254716807767" className="hover:text-white transition-colors">+254 716 807 767</a>
              </li>
              <li className="text-greenbell-100 flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@greenbellshades.co.ke" className="hover:text-white transition-colors">info@greenbellshades.co.ke</a>
              </li>
              <li className="text-greenbell-100 flex items-center gap-2">
                <span>🌐</span>
                <span>www.greenbellshades.co.ke</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar - black */}
      <div className="bg-black text-white">
        <div className="container-custom py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <p>© {currentYear} GREENBELL GROUP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
