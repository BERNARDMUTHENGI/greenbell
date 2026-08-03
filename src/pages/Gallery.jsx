import React from 'react';
import { galleryData } from '../data/content';

const Gallery = () => {
  return (
    <>
      {/* Hero Section with background image */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/shade3.jpg"
            alt="Greenbell gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="container-custom relative z-10 py-24 text-center">
          <span className="text-greenbell-400 font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h1 className="heading-primary text-white mt-3">Gallery</h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
            Visual showcase of our work and installations
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryData.map((item) => (
              <div
                key={item.id}
                className="aspect-square rounded-2xl overflow-hidden group cursor-pointer relative shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
