import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[75vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Full background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/shade1.jpg"
          alt="Greenbell shade structures"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-5 md:mb-6">
            Premium Shade & Canopy Solutions{" "}
            <span className="text-greenbell-400">
              Built to Last
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-10 leading-relaxed max-w-2xl">
            Custom-designed canopies, car shades, pergolas, gazebos,
            swimming pool covers, and commercial shade structures crafted
            with quality and precision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <Link
              to="/get-quote"
              className="btn-primary text-base whitespace-nowrap"
            >
              Contact Us
            </Link>

            <Link
              to="/gallery"
              className="inline-block border-2 border-white text-white px-6 md:px-8 py-3 rounded-[10px] text-base font-medium whitespace-nowrap hover:bg-white hover:text-greenbell-700 transition-all duration-300"
            >
              View Projects
            </Link>
          </div>

          {/* Stats */}
          <div className="hidden md:flex mt-12 lg:mt-16 items-center justify-start gap-8">
            <div>
              <p className="text-2xl lg:text-3xl font-bold text-white">
                100+
              </p>
              <p className="text-xs lg:text-sm text-gray-300">
                Projects Completed
              </p>
            </div>

            <div className="w-px h-12 bg-white/20" />

            <div>
              <p className="text-2xl lg:text-3xl font-bold text-white">
                98%
              </p>
              <p className="text-xs lg:text-sm text-gray-300">
                Customer Satisfaction
              </p>
            </div>

            <div className="w-px h-12 bg-white/20" />

            <div>
              <p className="text-2xl lg:text-3xl font-bold text-white">
                4+
              </p>
              <p className="text-xs lg:text-sm text-gray-300">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;