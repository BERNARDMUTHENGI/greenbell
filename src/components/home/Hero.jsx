import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with Image - More Visible */}
      <div className="absolute inset-0">
        <img 
          src="/images/shade1.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-greenbell-50/90 via-white/80 to-greenbell-100/75" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-greenbell-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-greenbell-300/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-greenbell-100/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 py-6 md:py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Hide on mobile, show on md and up */}
            <div className="hidden md:inline-flex items-center gap-2 bg-greenbell-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4 md:mb-6">
              <span className="w-2 h-2 bg-greenbell-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-greenbell-700">Est. 2022 • Quality Since Day One</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-greenbell-900 leading-tight mb-3 md:mb-4 lg:mb-6">
              Shade Your World
              <span className="block text-greenbell-600">with the Best</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-4 md:mb-6 lg:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Premium shade solutions for restaurants, events, homes, 
              and businesses. Custom designs built to last with 
              exceptional craftsmanship.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              <Link to="/services" className="btn-primary text-sm md:text-base">
                Explore Services
              </Link>
              <Link to="/get-quote" className="btn-outline text-sm md:text-base">
                Get Free Quote
              </Link>
            </div>

            {/* Stats - Hide on mobile, show on md and up */}
            <div className="hidden md:flex mt-6 lg:mt-8 xl:mt-12 items-center justify-center lg:justify-start gap-6 lg:gap-8">
              <div>
                <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-greenbell-700">50+</p>
                <p className="text-xs lg:text-sm text-gray-500">Projects Completed</p>
              </div>
              <div className="w-px h-8 lg:h-10 xl:h-12 bg-gray-200" />
              <div>
                <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-greenbell-700">100%</p>
                <p className="text-xs lg:text-sm text-gray-500">Client Satisfaction</p>
              </div>
              <div className="w-px h-8 lg:h-10 xl:h-12 bg-gray-200" />
              <div>
                <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-greenbell-700">4+</p>
                <p className="text-xs lg:text-sm text-gray-500">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Desktop Image - Hidden on mobile */}
          <div className="hidden lg:block relative">
            <div className="relative aspect-square rounded-3xl shadow-2xl overflow-hidden">
              <img 
                src="/images/shade1.jpg" 
                alt="Greenbell Shade Solutions" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-greenbell-900/30 via-transparent to-transparent" />
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-4 animate-bounce-slow">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="font-bold text-greenbell-800">5.0 Rating</p>
                  <p className="text-xs text-gray-500">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-bold text-greenbell-800">100%</p>
                  <p className="text-xs text-gray-500">On Time Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Image - Show only on mobile */}
        <div className="mt-6 lg:hidden">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/shade1.jpg" 
              alt="Greenbell Shade Solutions" 
              className="w-full h-56 sm:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-greenbell-900/40 via-transparent to-transparent" />
            {/* Small floating badge on mobile */}
            <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg px-3 py-1.5 flex items-center gap-1.5">
              <span className="text-sm">⭐</span>
              <span className="text-xs font-semibold text-greenbell-800">5.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;