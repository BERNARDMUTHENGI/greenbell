import { Link } from 'react-router-dom';
import { FaArrowUp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { ROUTES } from '../../constants/routes';
import { COMPANY_INFO, SOCIAL_LINKS } from '../../constants/socials';

const quickLinks = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'About Us', path: ROUTES.ABOUT },
  { label: 'Services', path: ROUTES.SERVICES },
  { label: 'Projects', path: ROUTES.PROJECTS },
  { label: 'Gallery', path: ROUTES.GALLERY },
  { label: 'Contact', path: ROUTES.CONTACT },
];

const serviceLinks = [
  'Restaurant Canopies',
  'Car Shades',
  'Swimming Pool Shades',
  'Pergolas',
  'Gazebos',
  'Parking Shades',
  'Event Tents',
  'Marquees',
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white relative">
      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">GREENBELL</span>
                <span className="block text-[10px] font-medium tracking-[0.2em] text-green-300">GROUP</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {COMPANY_INFO.tagline}. Providing premium shade and canopy solutions across Kenya since 2022.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to={ROUTES.SERVICES}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-green-300 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-green-300 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-white/70 text-sm hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-green-300 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white/70 text-sm hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Greenbell Group. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
}