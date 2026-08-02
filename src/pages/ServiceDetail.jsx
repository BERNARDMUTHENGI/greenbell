import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { servicesList } from '../data/content';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesList.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      {/* Hero Section with service image */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="container-custom relative z-10 py-24">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-5 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Services
          </Link>
          <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
            Greenbell Group
          </span>
          <h1 className="heading-primary text-white mt-3">{service.title}</h1>
          <p className="text-gray-200 mt-4 max-w-2xl text-lg">{service.description}</p>
        </div>
      </section>

      {/* Benefits overview */}
      <section className="py-14 bg-white border-b border-greenbell-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-3 shadow-sm">
                <span className="w-6 h-6 rounded-full bg-greenbell-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm font-medium text-greenbell-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sections with images */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {service.sections.map((section, idx) => (
              <div key={idx} className={`grid lg:grid-cols-2 gap-10 items-center ${idx % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={idx % 2 !== 0 ? 'lg:col-start-2' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={section.image}
                      alt={service.title}
                      className="w-full h-[320px] md:h-[380px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={idx % 2 !== 0 ? 'lg:col-start-1' : ''}>
                  <h2 className="heading-secondary mb-4">{section.heading}</h2>
                  {section.paragraphs.map((para, pidx) => (
                    <p key={pidx} className="text-gray-600 leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-greenbell-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need {service.title}?
          </h2>
          <p className="text-red-100 mb-8 max-w-xl mx-auto">
            Get a free consultation and custom quote from our expert team today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-quote" className="bg-white text-greenbell-700 px-8 py-3.5 rounded-full font-semibold border border-greenbell-700 hover:bg-gray-50 transition-colors">
              Get a Free Quote
            </Link>
            <a href="tel:+254716807767" className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-greenbell-700 transition-colors">
              Call +254 716 807 767
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
