import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';
import SERVICES from '../../data/services';
import { ROUTES } from '../../constants/routes';

const featured = SERVICES.slice(0, 6);

export default function FeaturedServices() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <SectionHeading
          subtitle="Our Services"
          title="Comprehensive Shade Solutions"
          description="From concept to installation, we provide end-to-end shade solutions tailored to your specific needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <div className="service-card group">
                <div className="icon-wrapper">
                  <service.icon className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <Link
                  to={ROUTES.SERVICES}
                  className="btn btn-link"
                >
                  Learn More
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              to={ROUTES.SERVICES}
              className="btn btn-outline"
            >
              View All Services
              <FaArrowRight />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}