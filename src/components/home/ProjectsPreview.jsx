import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/content';

const ProjectsPreview = () => {
  const featuredProjects = projectsData.slice(0, 4);
  
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
    return imageMap[projectName] || 'shade1.jpg';
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-greenbell-600 font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="heading-primary mt-2">Featured Projects</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore some of our recent projects showcasing our expertise and craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-greenbell-100 group">
              <div className="h-48 overflow-hidden">
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

        <div className="text-center mt-10">
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;