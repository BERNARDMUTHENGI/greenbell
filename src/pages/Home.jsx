import React from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import AboutPreview from '../components/home/AboutPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import ProjectsPreview from '../components/home/ProjectsPreview';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <Testimonials />
    </>
  );
};

export default Home;