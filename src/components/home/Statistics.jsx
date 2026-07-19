import ScrollReveal from '../common/ScrollReveal';
import AnimatedCounter from '../common/AnimatedCounter';
import STATS from '../../data/stats';

export default function Statistics() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-green-300 text-sm font-semibold tracking-[0.2em] uppercase">
              Our Track Record
            </span>
            {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-3">
              Numbers That Speak
            </h2> */}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <AnimatedCounter
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}