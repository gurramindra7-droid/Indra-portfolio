import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { codingProfiles } from '../data/portfolio';

const iconMap = {
  LeetCode: SiLeetcode,
  GeeksforGeeks: SiGeeksforgeeks,
};

const AnimeCoderSVG = ({ color = '#FFA116' }) => (
  <svg
    viewBox="0 0 180 180"
    className="w-28 h-28 md:w-36 md:h-36 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-500"
    aria-hidden="true"
  >
    {/* Body / Hoodie */}
    <ellipse cx="90" cy="115" rx="32" ry="42" fill={color} />
    {/* Head */}
    <circle cx="90" cy="60" r="28" fill={color} />
    {/* Hair - spiky anime style */}
    <path d="M62 60 Q62 28 90 24 Q118 28 118 60" fill={color} opacity="0.8" />
    <path d="M62 55 Q50 35 55 25 Q65 30 68 45" fill={color} opacity="0.6" />
    <path d="M118 55 Q130 35 125 25 Q115 30 112 45" fill={color} opacity="0.6" />
    {/* Hair fringe */}
    <path d="M72 42 Q80 32 90 38 Q100 32 108 42" fill={color} opacity="0.5" />
    {/* Anime Eyes */}
    <ellipse cx="78" cy="58" rx="6" ry="7" fill="white" opacity="0.9" />
    <ellipse cx="102" cy="58" rx="6" ry="7" fill="white" opacity="0.9" />
    <circle cx="78" cy="58" r="3.5" fill={color} />
    <circle cx="102" cy="58" r="3.5" fill={color} />
    {/* Eye shine */}
    <circle cx="80" cy="55" r="1.5" fill="white" />
    <circle cx="104" cy="55" r="1.5" fill="white" />
    {/* Mouth */}
    <path d="M84 72 Q90 76 96 72" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    {/* Laptop */}
    <rect x="58" y="135" width="64" height="8" rx="3" fill={color} opacity="0.9" />
    <rect x="62" y="105" width="56" height="32" rx="4" fill={color} opacity="0.7" />
    <rect x="66" y="108" width="48" height="26" rx="2" fill={color} opacity="0.35" />
    {/* Code lines */}
    <line x1="70" y1="115" x2="100" y2="115" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <line x1="70" y1="120" x2="92" y2="120" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    <line x1="70" y1="125" x2="96" y2="125" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    {/* Hands */}
    <ellipse cx="75" cy="138" rx="5" ry="3" fill={color} opacity="0.6" />
    <ellipse cx="105" cy="138" rx="5" ry="3" fill={color} opacity="0.6" />
    {/* Speed lines */}
    <line x1="130" y1="40" x2="155" y2="40" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <line x1="135" y1="50" x2="160" y2="50" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.2" />
    <line x1="25" y1="35" x2="50" y2="35" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <line x1="20" y1="45" x2="45" y2="45" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.2" />
    {/* Sparkles */}
    <circle cx="145" cy="70" r="1.5" fill={color} opacity="0.3" />
    <circle cx="35" cy="80" r="1" fill={color} opacity="0.25" />
    <circle cx="148" cy="95" r="1" fill={color} opacity="0.2" />
  </svg>
);

const CodingProfileCard = ({ profile, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = iconMap[profile.platform];

  return (
    <motion.a
      ref={ref}
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative block bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 md:p-8 overflow-hidden hover:bg-white/[0.06] transition-all duration-500 hover:border-red-500/20 hover:shadow-[0_0_40px_rgba(255,42,42,0.1)] cursor-pointer"
    >
      {/* Anime illustration */}
      <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 pointer-events-none select-none">
        <AnimeCoderSVG color={profile.accentColor} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
              {Icon && <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: profile.accentColor }} />}
            </div>
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md"
              style={{ backgroundColor: profile.accentColor }}
            />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
              {profile.platform}
            </h3>
            <p className="text-xs text-gray-500 font-medium mt-0.5">{profile.username}</p>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-5 leading-relaxed">
          {profile.tagline}
        </p>

        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 group-hover:text-red-400 transition-colors duration-300">
          <span>Visit Profile</span>
          <FiExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-red-500/5 via-transparent to-red-500/[0.02] pointer-events-none" />
    </motion.a>
  );
};

const CodingProfiles = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="coding" className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950 z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-red-500 uppercase mb-4">
            Competitive Programming
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Coding Profiles</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            My competitive programming journey — solving real-world problems one algorithm at a time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {codingProfiles.map((profile, idx) => (
            <CodingProfileCard key={profile.platform} profile={profile} index={idx} />
          ))}
        </div>

        <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      </div>
    </section>
  );
};

export default CodingProfiles;
