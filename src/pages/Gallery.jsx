import React, { useState } from 'react';
import { galleryData } from '../data/content';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(galleryData.map(item => item.category))];

  const filteredGallery = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === selectedCategory);

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
          <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h1 className="heading-primary text-white mt-3">Gallery</h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
            Visual showcase of our work and installations
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-greenbell-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGallery.map((item) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-red-200">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;
