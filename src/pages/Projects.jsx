import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import ScrollReveal from '../components/common/ScrollReveal';
import Button from '../components/common/Button';
import { ROUTES } from '../constants/routes';
import PROJECTS from '../data/projects';

export default function Projects() {
  return (
    <>
      {/* ===== HERO SECTION - NO BACKGROUND IMAGE ===== */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-primary">
        <div className="container text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-300 text-sm font-semibold tracking-[0.2em] uppercase"
          >
            Our Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4"
          >
            Completed Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg mt-4 max-w-2xl mx-auto"
          >
            Explore our portfolio of successful shade installations across Kenya.
          </motion.p>
        </div>
      </section>

      {/* ===== SEPARATOR ===== */}
      <div className="py-8 md:py-12">
        <div className="container">
          <div className="flex items-center gap-6 justify-center">
            <div className="h-px flex-1 max-w-32 bg-primary/10" />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <div className="h-px flex-1 max-w-32 bg-primary/10" />
          </div>
        </div>
      </div>

      {/* ===== PROJECTS GRID - NO CARD BACKGROUNDS, ALL CENTERED ===== */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.08}>
                <div className="group rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col border border-primary/5 hover:border-primary/20 hover:shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-600 text-white text-xs font-medium rounded-full">
                        <FaCheckCircle className="text-[10px]" />
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col text-center">
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                    <p className="text-text-body text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEPARATOR ===== */}
      <div className="py-8 md:py-12">
        <div className="container">
          <div className="flex items-center gap-6 justify-center">
            <div className="h-px flex-1 max-w-32 bg-primary/10" />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <div className="h-px flex-1 max-w-32 bg-primary/10" />
          </div>
        </div>
      </div>

      {/* ===== CTA SECTION - CENTERED ===== */}
      <section className="py-24 md:py-32">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Want to See Your Project Here?
            </h2>
            <p className="text-text-body text-lg leading-relaxed mb-8">
              Let us transform your outdoor space. Contact us today to start your shade project with Greenbell Group.
            </p>
            <Button to={ROUTES.CONTACT} className="min-w-[200px]">
              Get Started Today
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}