import React from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ShadeSolutions from '../components/home/ShadeSolutions';
import Testimonials from '../components/home/Testimonials';
import PriceSection from '../components/home/PriceSection';
import RecentInstallations from '../components/home/RecentInstallations';
import MapSection from '../components/home/MapSection';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ShadeSolutions />
      <Testimonials />
      <PriceSection />
      <RecentInstallations />
      <MapSection />
    </>
  );
};

export default Home;
