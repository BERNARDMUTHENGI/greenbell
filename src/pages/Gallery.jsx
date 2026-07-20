import React, { useState } from 'react';
import { galleryData } from '../data/content';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(galleryData.map(item => item.category))];

  const filteredGallery = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === selectedCategory);

  // Map images to specific gallery items by title
  const getGalleryImage = (title) => {
    const imageMap = {
      'Site Installation': 'shade1.jpg',
      'Canopy Structure': 'shade2.jpg',
      'Event Setup': 'shade3.jpg',
      'Custom Design': 'shade4.jpg',
      'Parking Solution': 'shade5.jpg',
      'Residential Shade': 'shade6.jpg',
      'Restaurant Canopy': 'shade7.jpg',
      'Pool Cover': 'shade8.jpg'
    };
    return imageMap[title] || 'shade1.jpg';
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-greenbell-50 py-16">
        <div className="container-custom">
          <h1 className="heading-primary text-center">Gallery</h1>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
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
                    : 'bg-gray-100 text-gray-600 hover:bg-greenbell-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredGallery.map((item) => (
              <div 
                key={item.id} 
                className="aspect-square rounded-2xl overflow-hidden group cursor-pointer relative shadow-sm hover:shadow-lg transition-shadow"
              >
                <img 
                  src={`/images/${getGalleryImage(item.title)}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-greenbell-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-greenbell-200">{item.category}</p>
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