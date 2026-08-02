import React from 'react';
import { Link } from 'react-router-dom';
import { servicesList } from '../data/content';

const Services = () => {
  return (
    <>
      {/* Hero Section with background image */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/shade3.jpg"
            alt="Greenbell services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="container-custom relative z-10 py-24 text-center">
          <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h1 className="heading-primary text-white mt-3">Our Services</h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
            Comprehensive shade solutions from design to installation and maintenance
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-greenbell-100 flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-greenbell-800 text-lg mb-2 group-hover:text-greenbell-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{service.shortDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-greenbell-700 px-2.5 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-greenbell-600">
                    View Details
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl font-bold text-greenbell-800 mb-3">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Contact us for a free consultation and custom quote tailored to your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-quote" className="btn-primary">
                Request a Quote
              </Link>
              <a href="tel:+254716807767" className="btn-outline">
                Call +254 716 807 767
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
