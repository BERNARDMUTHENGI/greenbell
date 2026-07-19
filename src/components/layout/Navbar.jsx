import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { ROUTES } from '../../constants/routes';
import NAV_LINKS from '../../data/navLinks';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isHome = location.pathname === ROUTES.HOME;
  const navBg = scrolled || !isHome
    ? 'bg-white shadow-md'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-primary' : 'text-white';
  const logoColor = scrolled || !isHome ? 'text-primary' : 'text-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="container">
          <div className="flex items-center justify-between h-20">
            <Link to={ROUTES.HOME} className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-lg bg-primary flex items-center justify-center ${scrolled || !isHome ? 'bg-primary' : 'bg-white/20 backdrop-blur-sm'}`}>
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <span className={`text-xl font-bold tracking-tight ${logoColor}`}>
                  GREENBELL
                </span>
                <span className={`block text-[10px] font-medium tracking-[0.2em] ${scrolled || !isHome ? 'text-accent' : 'text-white/80'}`}>
                  GROUP
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 relative py-2 ${
                    location.pathname === link.path
                      ? scrolled || !isHome ? 'text-primary' : 'text-white'
                      : scrolled || !isHome ? 'text-text-body hover:text-primary' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navUnderline"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${scrolled || !isHome ? 'bg-primary' : 'bg-white'}`}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+254716807767"
                className={`flex items-center gap-2 text-sm font-medium ${scrolled || !isHome ? 'text-text-body' : 'text-white/80'}`}
              >
                <FaPhone className="text-xs" />
                +254 716 807 767
              </a>
              <Link
                to={ROUTES.CONTACT}
                className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-light transition-colors duration-200"
              >
                Get a Quote
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 ${textColor}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`text-2xl font-semibold text-white transition-colors ${
                      location.pathname === link.path ? 'text-accent-light' : 'hover:text-accent-light'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-4"
              >
                <Link
                  to={ROUTES.CONTACT}
                  className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Get a Quote
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-4"
              >
                <a
                  href="tel:+254716807767"
                  className="flex items-center gap-2 text-white/80"
                >
                  <FaPhone />
                  +254 716 807 767
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}