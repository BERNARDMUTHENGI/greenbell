import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { servicesList } from '../../data/content';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services', hasDropdown: true },
    { path: '/projects', label: 'Projects' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/images/logo.png" alt="Greenbell Group logo" className="h-14 w-auto rounded-full border-2 border-greenbell-600" />
          <div>
            <h1 className="text-xl font-bold text-greenbell-800 leading-tight">GREENBELL</h1>
            <p className="text-xs text-greenbell-600 -mt-1">SHADES & CANOPIES</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <div key={link.path} ref={link.hasDropdown ? dropdownRef : null} className="relative">
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
                      location.pathname.startsWith('/services') || location.pathname === '/car-shade-prices'
                        ? 'text-greenbell-700 border-b-2 border-greenbell-700 pb-1'
                        : 'text-greenbell-800 hover:text-greenbell-600'
                    }`}
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen}
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Services Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                      isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-[560px] grid grid-cols-2 gap-1">
                      {servicesList.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          className="px-3 py-2.5 rounded-lg hover:bg-greenbell-50 transition-colors text-sm text-greenbell-800 hover:text-greenbell-600"
                        >
                          {service.title}
                        </Link>
                      ))}
                      <Link
                        to="/car-shade-prices"
                        className="px-3 py-2.5 rounded-lg bg-gray-100 text-greenbell-700 hover:bg-gray-200 transition-colors text-sm font-semibold col-span-2"
                      >
                        Car Shade Prices in Nairobi
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-greenbell-700 border-b-2 border-greenbell-700 pb-1'
                        : 'text-greenbell-800 hover:text-greenbell-600'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )}
            </div>
          ))}

          {/* Call CTA */}
          <a
            href="tel:+254716807767"
            className="bg-greenbell-600 text-white px-5 py-2.5 rounded-[10px] text-sm font-semibold hover:bg-greenbell-700 transition-all hover:shadow-lg flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +254 716 807 767
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="container-custom py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full py-3 flex items-center justify-between text-greenbell-800 transition-colors"
                    >
                      <span className="font-medium">Services</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 pr-2 pb-2 flex flex-col gap-1">
                        {servicesList.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.slug}`}
                            className="py-2 text-sm text-greenbell-800 hover:text-greenbell-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                        <Link
                          to="/car-shade-prices"
                          className="py-2 text-sm font-semibold text-greenbell-700 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Car Shade Prices in Nairobi
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `py-3 transition-colors ${
                        isActive
                          ? 'text-greenbell-700 font-semibold'
                          : 'text-greenbell-800 hover:text-greenbell-600'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                )}
              </div>
            ))}
            <a
              href="tel:+254716807767"
              className="bg-greenbell-600 text-white px-6 py-3 rounded-lg text-center font-medium hover:bg-greenbell-700 transition-colors mt-2 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +254 716 807 767
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
