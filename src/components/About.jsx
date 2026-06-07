import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBook, FiTarget } from 'react-icons/fi';
import { personalInfo, about } from '../data/portfolio';
import profileImage from '../assets/about/image.jpg';

const EducationCard = ({ edu, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 pb-8 border-l-2 border-red-500/30 last:pb-0"
    >
      {/* Dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
      </div>
      <span className="text-xs font-bold text-red-400 tracking-wider uppercase">{edu.year}</span>
      <h4 className="text-base font-bold text-white mt-1">{edu.degree}</h4>
      <p className="text-sm text-gray-400 mt-0.5">{edu.institution}</p>
      <p className="text-xs text-gray-500 mt-1">{edu.description}</p>
    </motion.div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative w-full pt-20 pb-32 md:pb-44 overflow-hidden">
      {/* Red background panel */}
      <div className="absolute inset-0 bg-[#ff2a2a] z-0" />

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-black">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          {/* Left: ID Badge */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full md:w-[320px] shrink-0 flex flex-col items-center mt-8 md:mt-0"
          >
            <div className="relative flex justify-center w-full">
              {/* Lanyard */}
              <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black/80 -translate-x-1/2 shadow-inner z-0 rounded-b-full" />
              <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 -translate-x-1/2 z-10 shadow-lg" />

              {/* Badge Card */}
              <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 -rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl -translate-x-1/2 flex justify-center items-center">
                  <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner" />
                </div>
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-gray-900/80 group">
                  {/* Subtle glow behind image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-red-500/20 via-transparent to-red-500/10 rounded-xl" />
                  {/* Glow border on hover */}
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5 group-hover:ring-red-500/40 transition-all duration-500" />
                  <img
                    src={profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-contain p-2 transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(255,42,42,0.3)]"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-white font-bold text-sm">{personalInfo.name}</p>
                  <p className="text-gray-400 text-[10px] tracking-wider uppercase">{personalInfo.role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 text-white"
          >
            {/* Intro */}
            <h2 className="text-4xl md:text-5xl font-black text-black mb-2">About Me</h2>
            <p className="text-lg font-bold mb-8 text-red-100">
              {personalInfo.role} based in {personalInfo.location}
            </p>

            {/* Professional intro */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-5 md:p-6 mb-6 border border-white/10">
              <div className="flex items-start gap-3 mb-3">
                <FiTarget className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <p className="text-sm md:text-base leading-relaxed text-red-50">
                  {about.intro}
                </p>
              </div>
            </div>

            {/* Career Objective */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-5 md:p-6 mb-8 border border-white/10">
              <div className="flex items-start gap-3">
                <FiTarget className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-2">Career Objective</h3>
                  <p className="text-sm md:text-base leading-relaxed text-red-50">
                    {about.careerObjective}
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <FiBook className="w-5 h-5 text-black" />
                <h3 className="text-sm font-bold text-black uppercase tracking-wider">Education</h3>
              </div>
              {about.education.map((edu, idx) => (
                <EducationCard key={idx} edu={edu} index={idx} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
