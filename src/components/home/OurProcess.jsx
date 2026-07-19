import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';
import PROCESS from '../../data/process';

export default function OurProcess() {
  return (
    <section className="py-20 md:py-28 bg-bg-light">
      <div className="container">
        <SectionHeading
         
          title="How We Work"
         
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS.map((step, index) => (
            <ScrollReveal key={step.id} delay={index * 0.15}>
              <div className="text-center group">
                {/* Number with circle */}
               
                
               
                
                {/* Content */}
                <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}