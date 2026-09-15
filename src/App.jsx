// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Projects from './pages/Projects';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';
// import GetQuote from './pages/GetQuote';
// import ServiceDetail from './pages/ServiceDetail';
// import CarShadePrices from './pages/CarShadePrices';
// import WhatsAppButton from './components/common/WhatsAppButton';
// import ScrollToTopButton from './components/common/ScrollToTopButton';
// import ScrollToTopOnRoute from './components/common/ScrollToTopOnRoute';

import { h1 } from "framer-motion/client";

// function App() {
//   return (
//     <div className="min-h-screen bg-white flex flex-col">
//       <ScrollToTopOnRoute />
//       <Header />
//       <main className="flex-grow pt-20">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/services/:slug" element={<ServiceDetail />} />
//           <Route path="/car-shade-prices" element={<CarShadePrices />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/get-quote" element={<GetQuote />} />
//         </Routes>
//       </main>
//       <Footer />
//       <WhatsAppButton />
//       <ScrollToTopButton />
//     </div>
//   );
// }

// export default App;

export default function App() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 px-6">

      {/* Background glow */}
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-red-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

      {/* Main card */}
      <div className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-xl">

        {/* Little vacationing character */}
        <div className="mb-5 text-7xl animate-bounce">
          🏖️
        </div>

        <div className="mb-4 inline-block rounded-full bg-red-500/15 px-4 py-2 text-sm font-semibold text-red-300">
          ⚠️ Domain Suspended
        </div>

        <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          Oops! This website
          <span className="text-purple-400"> went on vacation.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/60">
          Looks like the website packed its bags and went somewhere
          <span className="font-semibold text-white/90">
            {" "}on the cloud. ☁️🏝️
          </span>
        </p>

        <p className="mt-4 text-sm text-white/40">
          Don't worry, it'll be back from vacation soon.
        </p>

        {/* Status */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
          <div className="flex items-center justify-center gap-3 text-sm text-white/60">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" />
            Domain currently suspended
          </div>
        </div>

        {/* Vercel button */}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-black shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-purple-500/30"
        >
          Visit Vercel
          <span className="text-xl">→</span>
        </a>

        {/* Tiny troll footer */}
        <p className="mt-8 text-xs text-white/30">
          ☁️ Currently enjoying an all-expenses-paid vacation in the cloud.
        </p>

      </div>
    </div>
  );
}