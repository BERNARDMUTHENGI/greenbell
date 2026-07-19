import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';
import PROJECTS from '../../data/projects';
import { ROUTES } from '../../constants/routes';

const featured = PROJECTS.slice(0, 4);

export default function ProjectsPreview() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container">
        <SectionHeading
          
          title="Completed Projects"
          description="See how we've transformed outdoor spaces across Kenya with our premium shade solutions."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content - Centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-center">
                  <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-medium rounded-full mb-2">
                    {project.status}
                  </span>
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  <p className="text-white/60 text-sm">{project.category}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Added more top margin for better spacing */}
        <ScrollReveal>
          <div className="text-center mt-16 md:mt-20">
            <Link
              to={ROUTES.PROJECTS}
              className="inline-flex items-center gap-2 btn btn-outline-white group"
            >
              View All Projects
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}