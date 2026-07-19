import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { ROUTES } from '../../constants/routes';
import Button from '../common/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background - fixed position to ensure it covers everything */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Greenbell shade structures"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary/60" />
      </div>

      {/* Content - using grid for perfect centering */}
      <div className="relative z-10 w-full h-full min-h-screen">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col items-center justify-center min-h-screen pt-32 pb-20">
            <div className="w-full max-w-4xl text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block text-green-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4"
              >
                Shade Your World with the Best
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
              >
                Premium Shade & Canopy Solutions{' '}
                <span className="text-green-300">Built to Last</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-3xl mx-auto"
              >
                Custom-designed canopies, car shades, pergolas, gazebos, swimming pool covers, and commercial shade structures crafted with quality and precision.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button to={ROUTES.CONTACT} variant="secondary">
                  Get a Free Quote
                  <FaArrowRight className="ml-2" />
                </Button>
                <Button to={ROUTES.PROJECTS} variant="outlineWhite">
                  View Projects
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}