import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  SiOpenjdk, SiPython, SiC, 
  SiReact, SiJavascript, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, 
  SiMongodb, SiMysql,
  SiGit, SiGithub, SiVercel, SiRender, SiPostman
} from 'react-icons/si';
import { skills } from '../data/portfolio';

const iconMap = {
  SiJava: SiOpenjdk,
  SiPython: SiPython,
  SiC: SiC,
  SiReact: SiReact,
  SiJavascript: SiJavascript,
  SiHtml5: SiHtml5,
  SiCss: SiCss,
  SiNodedotjs: SiNodedotjs,
  SiExpress: SiExpress,
  SiMongodb: SiMongodb,
  SiMysql: SiMysql,
  SiGit: SiGit,
  SiGithub: SiGithub,
  SiVercel: SiVercel,
  SiRender: SiRender,
  SiPostman: SiPostman,
};

const SkillBar = ({ name, level, icon, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  if (icon) {
    const IconComponent = iconMap[icon];
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="flex items-center gap-2 py-1.5"
      >
        {IconComponent && <IconComponent className="w-5 h-5 text-gray-300" />}
        <span className="text-sm font-medium text-gray-300">{name}</span>
      </motion.div>
    );
  }

  if (level === undefined) {
    return (
      <motion.span
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="inline-block text-[11px] px-3 py-1.5 rounded-full bg-white/[0.06] text-gray-300 border border-white/[0.08] font-medium hover:bg-white/[0.1] hover:border-red-500/30 hover:text-white transition-all duration-300"
      >
        {name}
      </motion.span>
    );
  }

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-400"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="skills" className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-red-500 uppercase mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Technologies I use daily to build intelligent, production-ready applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              variants={cardVariants}
              className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-500 hover:border-red-500/20 hover:shadow-[0_0_30px_rgba(255,42,42,0.1)]"
            >
              {/* Glow effect */}
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/5 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-bold text-white">{category.category}</h3>
                </div>
                <div className="space-y-1">
                  {category.items.map((skill, i) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} index={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      </div>
    </section>
  );
};

export default Skills;
