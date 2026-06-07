import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBook, FiCode, FiAward } from 'react-icons/fi';
import { experience } from '../data/portfolio';

const typeConfig = {
  education: { icon: FiBook, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  project: { icon: FiCode, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' },
  experience: { icon: FiCode, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
  milestone: { icon: FiAward, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
};

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const config = typeConfig[item.type] || typeConfig.project;
  const Icon = config.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className={`relative flex items-start gap-6 mb-10 md:mb-14 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline dot connector */}
      <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10">
        <div className={`w-4 h-4 rounded-full ${config.bg} ${config.border} border-2 flex items-center justify-center`}>
          <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
        </div>
      </div>

      {/* Content card - mobile friendly */}
      <div className={`flex-1 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-5 md:p-6 hover:bg-white/[0.06] transition-all duration-500">
          {/* Type badge */}
          <div className="flex items-center gap-2 mb-3">
            <div className={`p-1.5 rounded-lg ${config.bg}`}>
              <Icon className={`w-3.5 h-3.5 ${config.color}`} />
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${config.color}`}>
              {item.type}
            </span>
            <span className="text-[10px] text-gray-600 ml-auto">{item.date}</span>
          </div>

          <h3 className="text-base md:text-lg font-bold text-white mb-2">{item.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-500 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-red-500 uppercase mb-4">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Experience</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            My learning journey and projects that shaped my expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/40 via-white/10 to-red-500/40 -translate-x-1/2" />

          {/* Timeline items */}
          {experience.map((item, idx) => (
            <TimelineItem key={item.id} item={item} index={idx} />
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      </div>
    </section>
  );
};

export default Experience;
