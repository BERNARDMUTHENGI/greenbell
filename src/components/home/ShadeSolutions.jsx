import React from 'react';
import { Link } from 'react-router-dom';
import { servicesList } from '../../data/content';

const ShadeSolutions = () => {
  const solutions = servicesList.slice(0, 8);

  return (
    <section className="section-padding bg-greenbell-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-greenbell-600 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="heading-primary mt-2">Our Shade Solutions</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our range of premium shade and canopy solutions crafted to protect and beautify every outdoor space.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-greenbell-100"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-greenbell-800 group-hover:text-greenbell-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{service.shortDesc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-greenbell-600 mt-3">
                  Learn More
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShadeSolutions;
