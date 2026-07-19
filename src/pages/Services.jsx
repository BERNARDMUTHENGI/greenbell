import { motion } from 'framer-motion';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import ScrollReveal from '../components/common/ScrollReveal';
import Button from '../components/common/Button';
import { ROUTES } from '../constants/routes';
import SERVICES from '../data/services';

export default function Services() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt="Our services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-300 text-sm font-semibold tracking-[0.2em] uppercase"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4"
          >
            Comprehensive Shade Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg mt-4 max-w-2xl mx-auto"
          >
            From design to installation and maintenance, we provide end-to-end shade solutions for every need.
          </motion.p>
        </div>
      </section>

      {/* ===== SERVICES LIST ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 !== 0 ? 'lg:grid-flow-dense' : ''
              } ${index > 0 ? 'mt-20 md:mt-28' : ''}`}>
                {/* Image - Alternates position */}
                <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                  <div className="relative group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl group-hover:bg-primary/0 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content - Alternates position */}
                <div className={index % 2 !== 0 ? 'lg:col-start-1' : ''}>
                  <div className="w-14 h-14 rounded-xl bg-bg-green flex items-center justify-center mb-5">
                    <service.icon className="text-xl text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-body text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <FaCheck className="text-accent text-xs flex-shrink-0" />
                          <span className="text-text-body text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button to={ROUTES.CONTACT}>
                    Get a Quote
                    <FaArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              We specialize in custom shade solutions. Tell us about your project and we'll design the perfect solution for your needs.
            </p>
            <Button to={ROUTES.CONTACT} variant="secondary">
              Contact Us for Custom Solutions
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}