import React from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CodingProfiles from './components/CodingProfiles';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <ParticleBackground />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <CodingProfiles />
        <Projects />
        <Experience />
        <SocialLinks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
