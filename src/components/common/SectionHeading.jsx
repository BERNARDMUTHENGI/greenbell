import { motion } from 'framer-motion';

export default function SectionHeading({ 
  subtitle, 
  title, 
  description, 
  center = true, 
  light = false,
  maxWidth = 'max-w-3xl' // Allow custom max width
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-block text-sm font-semibold tracking-[0.2em] uppercase mb-3 ${light ? 'text-green-300' : 'text-accent'}`}
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-primary'} ${center ? 'mx-auto' : ''}`}
        style={{ maxWidth: center ? '800px' : 'none' }}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mt-4 text-lg leading-relaxed ${center ? 'mx-auto text-center' : ''} ${light ? 'text-white/70' : 'text-text-body'} ${maxWidth}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}