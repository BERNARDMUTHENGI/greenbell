import React from 'react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-greenbell-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="heading-primary mt-2 mb-6">Your Trusted Shade Solutions Partner</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Greenbell, we believe that everyone deserves a comfortable space to enjoy the outdoors.
              Founded in 2022, our mission is to provide high-quality, customizable shade solutions that
              enhance any environment, from bustling restaurants to serene backyards.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              With a passion for innovation and a commitment to craftsmanship, we specialize in manufacturing
              a wide range of products, including restaurant canopies, car shades, tents, marquees, swimming
              pool shades, and much more. Each item is designed with both functionality and aesthetics in mind.
            </p>
            <Link to="/about" className="btn-primary inline-flex items-center gap-2">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/shade2.jpg"
                alt="Greenbell canopy installation"
                className="w-full h-[420px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
