import React from 'react';
import { testimonialsData } from '../../data/content';

const Testimonials = () => {
  return (
    <section className="section-padding bg-greenbell-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-greenbell-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="heading-primary mt-2">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-sm border border-greenbell-100">
              <div className="flex text-greenbell-500 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-greenbell-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;