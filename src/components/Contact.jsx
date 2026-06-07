import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiSend, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/portfolio';

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  phone: FiPhone,
};

const Contact = () => {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for actual form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1
          className="text-[25vw] leading-[0.75] font-black text-white/5 uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="flex justify-between items-start mb-12 md:mb-20">
            <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-90">Reach Us</div>
            {/* Social links in contact */}
            <div className="hidden md:flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || FiMail;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                    title={link.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/70 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/70 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/70 font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    required
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/70 font-medium resize-none rounded-none"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-12 mt-4">
              <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                <input
                  type="checkbox"
                  id="permission"
                  checked={formData.permission}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer"
                  style={{ accentColor: 'white' }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  This site is protected and the{' '}
                  <a href="#" className="underline hover:text-white transition-colors">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="underline hover:text-white transition-colors">
                    Terms of Service
                  </a>{' '}
                  apply.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    For information on how to unsubscribe, please review our{' '}
                    <a href="#" className="underline hover:text-white transition-colors">
                      privacy policy
                    </a>
                    .
                  </p>

                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap self-start sm:self-auto"
                  >
                    {submitted ? 'Sent!' : 'Send'}
                    <FiSend className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* Mobile social links */}
          <div className="flex md:hidden items-center justify-center gap-6 mt-12 pt-8 border-t border-white/20">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || FiMail;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
