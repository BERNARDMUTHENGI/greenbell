import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FeaturedServices from '../components/home/FeaturedServices';
import ProjectsPreview from '../components/home/ProjectsPreview';
import OurProcess from '../components/home/OurProcess';
import Statistics from '../components/home/Statistics';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';
import ContactCTA from '../components/home/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-spacer">
        <AboutPreview />
      </div>
      <div className="section-spacer">
        <WhyChooseUs />
      </div>
      <div className="section-spacer">
        <FeaturedServices />
      </div>
      <div className="section-spacer">
        <ProjectsPreview />
      </div>
      <div className="section-spacer">
        <OurProcess />
      </div>
      <div className="section-spacer">
        <Statistics />
      </div>
      <div className="section-spacer">
        <Testimonials />
      </div>
      <div className="section-spacer">
        <CTA />
      </div>
      <div className="section-spacer">
        <ContactCTA />
      </div>
    </>
  );
}