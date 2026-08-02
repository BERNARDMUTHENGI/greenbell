import React from 'react';
import { Link } from 'react-router-dom';
import { galleryData } from '../../data/content';

const RecentInstallations = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-greenbell-600 font-semibold text-sm uppercase tracking-wider">Site Works</span>
          <h2 className="heading-primary mt-2">Recent Installations</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A gallery of our latest shade installations, site works, and custom projects across Kenya.
          </p>
        </div>

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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-xs text-red-200">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/gallery" className="btn-primary">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentInstallations;
