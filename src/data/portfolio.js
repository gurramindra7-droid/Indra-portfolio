export const personalInfo = {
  name: 'Indra',
  brand: 'Indra.dev',
  role: 'AI-Native Full-Stack Engineer',
  tagline: 'I build intelligent, scalable, and modern web applications using AI-powered workflows.',
  email: 'gurramindra.7@gmail.com',
  phone: '+91 6301440294',
  location: 'Worldwide',
  resumeUrl: '/resume.pdf',
  githubUrl: 'https://github.com/gurramindra7-droid',
  linkedinUrl: 'https://www.linkedin.com/in/indra-gurram-6221b8398',
};


export const about = {
  intro: `I'm a passionate AI-Native Full-Stack Engineer`,
  careerObjective: `To build the next generation of AI-powered applications that make a real impact — combining rigorous software engineering with state-of-the-art artificial intelligence to solve complex, real-world problems.`,
  education: [
    {
      degree: 'Bachelor of Technology in Bio Science and Engineering',
      institution: 'National Institute of Technology, Calicut',
      year: '2023 – 2027',
      description: 'CGPA: 7.43/10 | Kerala, India',
    },
    {
      degree: 'Class XII (Intermediate)',
      institution: 'Narayan Jr. College, Nellore',
      year: '2021 – 2023',
      description: 'Percentage: 94.6% | Andhra Pradesh, India',
    },
    {
      degree: 'Class X',
      institution: 'Champion High School, Sullurpeta',
      year: '2020 – 2021',
      description: 'Percentage: 100.0% | Andhra Pradesh, India',
    },
  ],
};

export const skills = [
  {
    category: 'Programming',
    icon: '💻',
    items: [
      { name: 'Java', icon: 'SiJava' },
      { name: 'Python', icon: 'SiPython' },
      { name: 'C', icon: 'SiC' },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      { name: 'React', icon: 'SiReact' },
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'HTML', icon: 'SiHtml5' },
      { name: 'CSS', icon: 'SiCss' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'Express.js', icon: 'SiExpress' },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: [
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'SQL', icon: 'SiMysql' },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    items: [
      { name: 'Git', icon: 'SiGit' },
      { name: 'GitHub', icon: 'SiGithub' },
      { name: 'Vercel', icon: 'SiVercel' },
      { name: 'Render', icon: 'SiRender' },
      { name: 'Postman', icon: 'SiPostman' },
    ],
  },
  {
    category: 'Data Analysis',
    icon: '📊',
    items: [
      { name: 'NumPy', icon: 'SiNumpy' },
      { name: 'Pandas', icon: 'SiPandas' },
      { name: 'Matplotlib', icon: 'FiPieChart' },
      { name: 'Seaborn', icon: 'FiBarChart2' },
    ],
  },
];

export const projects = [
  {
    id: 'flight-price-prediction-ml',
    title: 'Flight Price Prediction ML',
    description:
      'A machine learning web application that predicts flight ticket prices based on inputs like airline, route, departure time, and number of stops. Includes data preprocessing, feature engineering, and model training to deliver accurate fare predictions, deployed as a live web app on Vercel.',
    techStack: ['Python', 'Machine Learning', 'Regression', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/gurramindra7-droid/flight-price-prediction-ml',
    liveUrl: 'https://flight-price-app-pi.vercel.app/',
    image: null,
    gradient: 'from-sky-600 via-blue-500 to-indigo-400',
    status: null,
    date: 'September 2026',
  },
  {
    id: 'sigma-gpt',
    title: 'SIGMA GPT — AI Chatbot Platform (ChatGPT Clone)',
    description:
      'Built a full-stack AI chatbot platform with secure user authentication, persistent chat history, and real-time conversational responses. Integrated the Groq API (Llama 3.3 70B Versatile) with MongoDB Atlas to deliver low-latency AI responses and reliable chat storage for multiple concurrent users. Deployed on Vercel using React.js (Vite) frontend and Node.js/Express.js backend.',
    techStack: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Groq API', 'JWT', 'Vercel'],
    githubUrl: '#',
    liveUrl: 'https://sigma-gpt-lake.vercel.app',
    image: null,
    gradient: 'from-purple-600 via-pink-500 to-red-500',
    date: 'May 2026',
  },
  {
    id: 'study-focus',
    title: 'Study Focus',
    description:
      'Chrome extension for focused studying with website blocking, Pomodoro timer, study tracking, and cloud-synced productivity data.',
    techStack: ['Chrome Extension', 'Manifest V3', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/gurramindra7-droid/study-focus',
    liveUrl: 'https://github.com/gurramindra7-droid/study-focus',
    image: null,
    gradient: 'from-blue-600 via-cyan-500 to-teal-400',
    date: '2026',
  },
  {
    id: 'secure-splitter',
    title: 'Java Splitter',
    description:
      'Built a secure expense-splitting app with a heap-based debt simplification algorithm to minimize settlement transactions between group members. Implemented a rule-based fraud detection engine (threshold, velocity, and cycle detection) with JWT authentication and REST APIs to flag suspicious transactions in real time.',
    techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'JWT', 'MySQL', 'JUnit', 'REST APIs'],
    githubUrl: '#TODO: Add your Secure Splitter GitHub repo URL here',
    liveUrl: '#',
    image: null,
    gradient: 'from-emerald-600 via-green-500 to-teal-400',
    date: 'July 2026',
  },
  {
    id: 'nexora-ai',
    title: 'NEXORA AI',
    description:
      'NEXORA AI is an AI-powered platform currently under development, focused on AI agents, RAG pipelines, automations, and AI-driven business workflows.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'MySQL', 'AI / RAG / Agents'],
    githubUrl: null,
    liveUrl: null,
    image: null,
    gradient: 'from-indigo-600 via-violet-500 to-purple-400',
    status: 'In Progress',
    date: 'June 2026',
  },
  {
    id: 'apitrack',
    title: 'APITRACK — GATE & Placement Aptitude Preparation',
    description:
      'An aptitude practice platform built to help students prepare for GATE and campus placements through quantitative aptitude, logical reasoning, verbal reasoning, practice questions, and mock tests.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    githubUrl: 'https://github.com/gurramindra7-droid/APITRACK',
    liveUrl: 'https://apitrack-six.vercel.app/',
    image: null,
    gradient: 'from-orange-500 via-amber-500 to-yellow-400',
    status: null,
    date: 'April 2026',
  },
];

export const experience = [
  {
    id: 2,
    type: 'experience',
    title: 'AI Web Engineer (Part-time) — CWA-Labs',
    date: 'Aug 2026 – Present',
    description:
      '• Working as an AI Web Engineer, developing and delivering cloud-based resource solutions for multinational corporations (MNCs) on Google Cloud Platform (GCP) and AWS.\n• Designing and provisioning scalable cloud resources and services to support client infrastructure and AI-integrated web applications.\n• Collaborating with cross-functional teams to build reliable, production-grade solutions aligned with client requirements on GCP and AWS environments.',
    tags: ['AI', 'Cloud', 'GCP', 'AWS', 'Web Engineering'],
  },
  {
    id: 1,
    type: 'experience',
    title: 'AI Full-Stack Developer (Intern) — SUNTECH',
    date: 'May 2026 – July 2026',
    description:
      'Worked on AI full-stack projects, building and implementing end-to-end web services for client companies and businesses. Collaborated with the engineering team to design, develop, and deploy full-stack solutions using modern AI-integrated tech stacks.',
    tags: ['AI', 'Full-Stack', 'Web Services', 'Spring Boot', 'React'],
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/gurramindra7-droid',
    icon: 'github',
    label: 'View my code on GitHub',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/indra-gurram-6221b8398',
    icon: 'linkedin',
    label: 'Connect on LinkedIn',
  },
  {
    name: 'Email',
    url: 'mailto:gurramindra.7@gmail.com',
    icon: 'email',
    label: 'Send me an email',
  },
  {
    name: 'Phone',
    url: 'tel:+916301440294',
    icon: 'phone',
    label: 'Call me',
  },
];

export const codingProfiles = [
  {
    platform: 'LeetCode',
    username: 'GURRAM_INDRA',
    url: 'https://leetcode.com/u/GURRAM_INDRA/',
    tagline: 'Problem Solving & DSA',
    gradient: 'from-amber-400 via-orange-500 to-yellow-500',
    accentColor: '#FFA116',
  },
  {
    platform: 'GeeksforGeeks',
    username: 'gurrami5lod',
    url: 'https://www.geeksforgeeks.org/profile/gurrami5lod',
    tagline: 'Problem Solving & DSA',
    gradient: 'from-green-400 via-emerald-500 to-teal-500',
    accentColor: '#2F8D46',
  },
  {
    platform: 'HackerRank',
    username: 'gurramindra_7',
    url: 'https://www.hackerrank.com/profile/gurramindra_7',
    tagline: 'Problem Solving & Certifications',
    gradient: 'from-green-500 via-emerald-400 to-lime-400',
    accentColor: '#00EA64',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Coding', href: '#coding' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
