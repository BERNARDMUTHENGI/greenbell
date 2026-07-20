import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/content';

const Services = () => {
  const services = Object.values(servicesData);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-greenbell-50 py-16">
        <div className="container-custom">
          <h1 className="heading-primary text-center">Our Services</h1>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive shade solutions from design to maintenance
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-greenbell-50 p-8 rounded-2xl border border-greenbell-100 hover:shadow-lg transition-shadow">
                <div className="text-xs font-bold text-greenbell-600 uppercase tracking-wider mb-2">
                  {service.title}
                </div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-greenbell-500 mt-1">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-greenbell-800 mb-4">Ready to Get Started?</h3>
            <Link to="/get-quote" className="btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;