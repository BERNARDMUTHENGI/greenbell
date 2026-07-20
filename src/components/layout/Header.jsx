import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
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
          <div className="w-10 h-10 bg-greenbell-600 rounded-lg flex items-center justify-center group-hover:bg-greenbell-700 transition-colors">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-greenbell-800 leading-tight">GREENBELL</h1>
            <p className="text-xs text-greenbell-600 -mt-1">SHADES & CANOPIES</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-greenbell-600 border-b-2 border-greenbell-600 pb-1' 
                    : 'text-gray-700 hover:text-greenbell-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/get-quote"
            className="bg-greenbell-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-greenbell-700 transition-all hover:shadow-lg"
          >
            Get Quote
          </Link>
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
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container-custom py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `py-3 px-4 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-greenbell-50 text-greenbell-600 font-semibold' 
                      : 'text-gray-700 hover:bg-greenbell-50 hover:text-greenbell-600'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/get-quote"
              className="bg-greenbell-600 text-white px-6 py-3 rounded-lg text-center font-medium hover:bg-greenbell-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;