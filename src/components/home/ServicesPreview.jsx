import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/content';

const ServicesPreview = () => {
  const services = Object.values(servicesData);

  return (
    <section className="section-padding bg-greenbell-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-greenbell-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="heading-primary mt-2">Our Services</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive shade solutions designed to meet your specific needs and exceed your expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-greenbell-100 hover:shadow-lg transition-shadow">
              <div className="text-xs font-bold text-greenbell-600 uppercase tracking-wider mb-4">
                {service.title}
              </div>
              <ul className="space-y-2">
                {service.items.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-greenbell-500 mt-1">▸</span>
                    {item}
                  </li>
                ))}
                {service.items.length > 3 && (
                  <li className="text-sm text-greenbell-600 font-medium">+ more</li>
                )}
              </ul>
            </div>
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

export default ServicesPreview;