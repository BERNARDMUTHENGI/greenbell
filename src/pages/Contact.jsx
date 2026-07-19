import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import ScrollReveal from '../components/common/ScrollReveal';
import Button from '../components/common/Button';
import { ROUTES } from '../constants/routes';
import { COMPANY_INFO } from '../constants/socials';

export default function Contact() {
  return (
    <>
      {/* ===== HERO SECTION - NO BACKGROUND IMAGE ===== */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-primary">
        <div className="container text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-300 text-sm font-semibold tracking-[0.2em] uppercase"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg mt-4 max-w-2xl mx-auto"
          >
            Ready to transform your outdoor space? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ===== SEPARATOR ===== */}
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

      {/* ===== CONTACT INFORMATION & FORM ===== */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal variant="slideLeft">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Contact Information
                </h2>
                <p className="text-text-body leading-relaxed mb-8">
                  Reach out to us through any of the following channels. Our team is ready to assist you with your shade project.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <FaMapMarkerAlt className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-sm">Address</h4>
                      <p className="text-text-body text-sm">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-sm">Phone</h4>
                      <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-text-body text-sm hover:text-primary transition-colors">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-sm">Email</h4>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-text-body text-sm hover:text-primary transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-sm">Business Hours</h4>
                      <div className="text-text-body text-sm whitespace-pre-line">
                        {COMPANY_INFO.hours}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/254716807767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                >
                  <FaWhatsapp className="text-xl" />
                  Chat on WhatsApp
                </a>
              </ScrollReveal>
            </div>

           
          </div>
        </div>
      </section>

      {/* ===== SEPARATOR ===== */}
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

      {/* ===== MAP SECTION ===== */}
      <section className="h-96 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <FaMapMarkerAlt className="text-4xl text-primary mx-auto mb-3" />
            <p className="text-text-body font-medium">Astrol Business Center, Nairobi, Kenya</p>
            <p className="text-text-body/60 text-sm mt-1">Interactive map coming soon</p>
          </div>
        </div>
        <iframe
          title="Greenbell Group Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31926.143920499976!2d36.777!3d-1.286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173ba0d71f19%3A0x5a2dba8520a1f18a!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="relative z-10"
        />
      </section>

      {/* ===== SEPARATOR ===== */}
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

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Whether you need a simple car shade or a complete commercial shade solution, Greenbell Group has the expertise to deliver.
            </p>
            <a
              href="tel:+254716807767"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
            >
              <FaPhone />
              Call Us Now
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}