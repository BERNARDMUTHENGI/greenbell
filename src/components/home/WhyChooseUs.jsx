import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';
import FEATURES from '../../data/features';

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            subtitle="Why Choose Us"
            title="The Greenbell Difference"
            description="We combine premium materials, expert craftsmanship, and dedicated service to deliver shade solutions that exceed expectations."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {FEATURES.map((feature, index) => (
              <ScrollReveal key={feature.id} delay={index * 0.08}>
                <div className="feature-card group flex flex-col items-center text-center">
                  <div className="icon-wrapper">
                    <feature.icon className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}