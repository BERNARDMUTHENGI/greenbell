import { motion } from 'framer-motion';
import { FaEye, FaBullseye, FaHeart, FaHandshake, FaLeaf, FaStar } from 'react-icons/fa';
import ScrollReveal from '../components/common/ScrollReveal';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { ROUTES } from '../constants/routes';

const values = [
  { icon: FaStar, title: 'Quality', desc: 'We never compromise on the quality of our materials or workmanship.' },
  { icon: FaHeart, title: 'Customer-Centricity', desc: 'Every decision we make starts and ends with our customers.' },
  { icon: FaBullseye, title: 'Innovation', desc: 'We constantly explore new designs, materials, and techniques.' },
  { icon: FaLeaf, title: 'Sustainability', desc: 'We use eco-friendly materials and responsible manufacturing.' },
  { icon: FaHandshake, title: 'Integrity', desc: 'Transparency and honesty guide every interaction.' },
];

// Section Separator Component with more spacing
const SectionSeparator = () => (
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
);

export default function About() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-primary">
        <div className="container text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-300 text-sm font-semibold tracking-[0.2em] uppercase"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg mt-4 max-w-2xl mx-auto"
          >
            Discover the journey behind Greenbell Group and our commitment to excellence.
          </motion.p>
        </div>
      </section>

      <SectionSeparator />

      {/* ===== STORY SECTION ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal variant="slideLeft">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80"
                  alt="Greenbell fabrication"
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight">
              <div>
                <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3 block">
                  Company Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">
                  From Vision to Kenya's Leading Shade Provider
                </h2>
                <p className="text-text-body text-lg leading-relaxed mb-6">
                  At Greenbell, we believe that everyone deserves a comfortable space to enjoy the outdoors. Founded in 2022, our mission is to provide high-quality, customizable shade solutions that enhance any environment, from bustling restaurants to serene backyards.
                </p>
                <p className="text-text-body leading-relaxed mb-6">
                  With a passion for innovation and a commitment to craftsmanship, we specialize in manufacturing a wide range of products, including restaurant canopies, car shades, tents, marquees, swimming pool shades, and much more. Each item is designed with both functionality and aesthetics in mind, ensuring that our customers receive durable and stylish solutions tailored to their unique needs.
                </p>
                <p className="text-text-body leading-relaxed">
                  Our team consists of experienced professionals who prioritize quality and customer satisfaction. We take pride in our ability to create bespoke products that reflect our clients' visions, whether it's a vibrant branded gazebo for an event or a sturdy tarpaulin for a lorry.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* ===== VISION & MISSION SECTION ===== */}
      <section className="py-24 md:py-32 bg-bg-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal variant="slideLeft">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6">
                  <FaEye className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-text-body text-lg leading-relaxed">
                  To become Kenya's leading provider of innovative shade solutions, transforming outdoor spaces into comfortable and inviting environments.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6">
                  <FaBullseye className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-text-body text-lg leading-relaxed">
                  To provide high-quality, customizable shade solutions that combine functionality, durability, and style while delivering exceptional customer satisfaction.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* ===== VALUES SECTION ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <SectionHeading
            subtitle="Company Ethos"
            title="What Drives Us"
            description="Our ethos is grounded in a commitment to quality, innovation, and customer satisfaction. We believe that every outdoor space deserves to be transformed."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-bg-light hover:bg-bg-green transition-all duration-300 h-full border border-transparent hover:border-primary/10">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-5">
                    <value.icon className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-text-body leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* ===== TRUST SECTION ===== */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="text-green-300 text-sm font-semibold tracking-[0.2em] uppercase">
                  Why Clients Trust Greenbell
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                  A Partnership Built on Trust and Excellence
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  We don't just provide products; we build relationships. Our experienced team guides you through every step, from the initial design consultation to ongoing maintenance, ensuring your experience is seamless and enjoyable. With Greenbell, you're not just choosing a shade provider — you're partnering with a company that genuinely cares about enhancing your outdoor experience.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['On-Time Delivery', 'Transparent Pricing', 'After-Sales Support', 'Proven Track Record'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-300" />
                      <span className="text-white/90 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                alt="Greenbell inspection"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Choose Us, and Let's Create a Shaded Oasis
            </h2>
            <p className="text-text-body text-lg leading-relaxed mb-8">
              Let's create a shaded oasis that reflects your style and values. Contact us today and experience the Greenbell difference.
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