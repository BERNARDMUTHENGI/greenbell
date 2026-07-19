import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';
import { ROUTES } from '../../constants/routes';
import { FaArrowRight } from 'react-icons/fa';

export default function CTA() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="container">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-primary via-primary to-primary-dark min-h-[460px] flex items-center justify-center px-8 py-20 md:px-16 lg:px-24">

            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-36 -right-36 w-[500px] h-[500px] rounded-full bg-white/10 blur-sm" />

              <div className="absolute -bottom-28 -left-28 w-[350px] h-[350px] rounded-full bg-white/10" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-white/10" />

              <div className="absolute top-16 left-20 w-3 h-3 rounded-full bg-white/30" />
              <div className="absolute bottom-24 right-24 w-2 h-2 rounded-full bg-white/20" />
              <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-white/15" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-8">

              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-green-200 backdrop-blur-sm">
                Ready to Transform Your Space?
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Let's Create Your
                <br />
                Perfect Shade Solution
              </h2>

              <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-white/80">
                Whether you need elegant pergolas, premium retractable awnings,
                modern carports, or custom shade structures, our experienced team
                is ready to transform your vision into reality with high-quality
                craftsmanship and exceptional service.
              </p>

              {/* Buttons */}
              <div className="pt-8 md:pt-10 flex flex-col sm:flex-row justify-center items-center gap-5">

                <Button
                  to={ROUTES.CONTACT}
                  variant="secondary"
                  className="group min-w-[230px] px-10 py-5 text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Get a Free Quote
                  <FaArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>

                <Button
                  to={ROUTES.SERVICES}
                  variant="outlineWhite"
                  className="min-w-[230px] px-10 py-5 text-lg"
                >
                  Explore Services
                </Button>

              </div>

            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}