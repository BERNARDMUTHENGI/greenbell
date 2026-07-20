import React, { useState } from 'react';
import { projectsData } from '../data/content';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Commercial', 'Residential', 'Events'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  // Map images to specific projects by name
  const getProjectImage = (projectName) => {
    const imageMap = {
      'Restaurant Canopy': 'shade2.jpg',
      'Car Parking Shade': 'shade1.jpg',
      'Event Marquee Tent': 'shade3.jpg',
      'Swimming Pool Shade': 'shade4.jpg',
      'Custom Car Shade': 'shade5.jpg',
      'Playground Cover': 'shade6.jpg',
      'Restaurant Parasol': 'shade7.jpg',
      'Privacy Screen': 'shade8.jpg',
      'Commercial Parking Space': 'shade9.jpg',
      'Pergolla': 'shade10.jpg',
      'Bike Park': 'shade11.jpg',
      'Garden Umbrella': 'shade12.jpg'
    };
    return imageMap[projectName] || 'shade1.jpg'; // fallback to shade1.jpg if not found
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-greenbell-50 py-16">
        <div className="container-custom">
          <h1 className="heading-primary text-center">Our Projects</h1>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Showcasing our expertise and craftsmanship
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-greenbell-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-greenbell-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-greenbell-100 group">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={`/images/${getProjectImage(project.name)}`}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-greenbell-800">{project.name}</h4>
                  <p className="text-sm text-gray-500">{project.category}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-1.5 h-1.5 bg-greenbell-500 rounded-full"></span>
                    <span className="text-xs text-greenbell-600">{project.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;