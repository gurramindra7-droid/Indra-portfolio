import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/portfolio';

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative"
    >
      <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,42,42,0.08)]">
        {/* Gradient accent strip */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

        <div className="p-6 md:p-8">
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] md:text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 font-medium"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[10px] md:text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-500 border border-white/10">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Action Links */}
          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group/link"
            >
              <FiGithub className="w-4 h-4" />
              <span>Source</span>
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-0.5">→</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors group/link"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950 z-0" />

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
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Projects</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Real-world applications I've built from the ground up
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      </div>
    </section>
  );
};

export default Projects;
