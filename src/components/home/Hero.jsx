import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[62vh] md:min-h-screen flex items-start overflow-hidden">
      {/* Full background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/shade1.jpg"
          alt="Greenbell shade structures"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
      </div>

      <div className="container-custom relative z-10 pt-12 md:pt-14 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-snug mb-4 md:mb-6">
            Premium Shade & Canopy Solutions{' '}
            <span className="text-red-400">Built to Last</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 md:mb-10 leading-relaxed max-w-2xl">
            Custom-designed canopies, car shades, pergolas, gazebos, swimming pool covers,
            and commercial shade structures crafted with quality and precision.
          </p>

          <div className="flex items-center gap-3 md:gap-4">
            <Link to="/get-quote" className="btn-primary text-base md:text-base whitespace-nowrap">
              Get a Free Quote
            </Link>
            <Link
              to="/projects"
              className="inline-block border-2 border-white text-white px-6 md:px-8 py-3 rounded-full text-base md:text-base font-medium whitespace-nowrap hover:bg-white hover:text-greenbell-700 transition-all duration-300"
            >
              View Projects
            </Link>
          </div>

          {/* Stats */}
          <div className="hidden md:flex mt-12 items-center justify-start gap-8">
            <div>
              <p className="text-2xl lg:text-3xl font-bold text-white">100+</p>
              <p className="text-xs lg:text-sm text-gray-300">Projects Completed</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div>
              <p className="text-2xl lg:text-3xl font-bold text-white">98%</p>
              <p className="text-xs lg:text-sm text-gray-300">Customer Satisfaction</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div>
              <p className="text-2xl lg:text-3xl font-bold text-white">4+</p>
              <p className="text-xs lg:text-sm text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
