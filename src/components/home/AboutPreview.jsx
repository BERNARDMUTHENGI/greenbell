import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';
import { ROUTES } from '../../constants/routes';

export default function AboutPreview() {
  const features = ['Quality Materials', 'Custom Design', 'Expert Installation', 'Full Warranty'];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Section */}
            <ScrollReveal variant="slideLeft">
              <div className="relative flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Greenbell installation team"
                  className="w-full max-w-md lg:max-w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-white px-8 py-4 rounded-xl hidden md:block">
                  <span className="text-3xl font-bold">4+</span>
                  <span className="block text-sm text-white/80">Years of Excellence</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Content Section */}
            <ScrollReveal variant="slideRight">
              <div className="text-center lg:text-left">
                <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3">
                  About Greenbell
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
                  Crafting Premium Shade Solutions Since 2022
                </h2>
                <p className="text-text-body text-lg leading-relaxed mb-6">
                  Founded in 2022, Greenbell was born from a passion for transforming outdoor spaces. We specialize in manufacturing high-quality, customizable shade solutions for residential, commercial, and industrial clients across Kenya.
                </p>
                <p className="text-text-body leading-relaxed mb-8">
                  Our team of experienced professionals combines craftsmanship with innovation to deliver shade structures that are not only functional but aesthetically stunning. From elegant restaurant canopies to heavy-duty parking shades, every product reflects our commitment to quality.
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8 max-w-lg mx-auto lg:mx-0">
                  {features.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-sm font-medium text-primary">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center lg:justify-start">
                  <Button to={ROUTES.ABOUT}>Learn More About Us</Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}