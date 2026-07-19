import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';
import TESTIMONIALS from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-bg-light">
      <div className="container">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what our valued clients have to say about working with Greenbell."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.15}>
              <div className="group relative p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-primary/5 hover:border-primary/20 transition-all duration-300 h-full flex flex-col text-center">
                {/* Quote Icon - Centered */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <FaQuoteLeft className="text-primary/30 text-xl group-hover:text-primary/50 transition-colors duration-300" />
                  </div>
                </div>
                
                {/* Testimonial Text */}
                <p className="text-text-body leading-relaxed mb-6 flex-1 text-center">
                  "{testimonial.text}"
                </p>
                
                {/* Star Rating - Centered */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                
                {/* Client Info - Centered */}
                <div className="border-t border-primary/5 pt-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm mx-auto mb-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">{testimonial.name}</h4>
                    <p className="text-text-body text-xs">{testimonial.role}</p>
                    <p className="text-text-body/60 text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}