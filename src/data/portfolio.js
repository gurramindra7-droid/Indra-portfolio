export const personalInfo = {
  name: 'Indra',
  brand: 'Indra.dev',
  role: 'AI Native Engineer',
  tagline: 'I build intelligent, scalable, and modern web applications using AI-powered workflows.',
  email: 'gurramindra.7@gmail.com',
  phone: '+91 6301440294',
  location: 'Worldwide',
  resumeUrl: '/resume.pdf',
  githubUrl: 'https://github.com/gurramindra7-droid',
  linkedinUrl: 'https://www.linkedin.com/in/indra-gurram-6221b8398',
};

export const typingWords = [
  'AI Native Engineer',
  'Full-Stack Developer',
  'AI Solutions Architect',
  'Open Source Contributor',
];

export const about = {
  intro: `I'm a passionate AI Native Engineer with expertise in building intelligent applications that bridge the gap between cutting-edge AI and modern web technologies. I specialize in creating scalable, production-ready systems that leverage the power of large language models, vector databases, and agentic workflows.`,
  careerObjective: `To build the next generation of AI-powered applications that make a real impact — combining rigorous software engineering with state-of-the-art artificial intelligence to solve complex, real-world problems.`,
  education: [
    {
      degree: 'Bachelor of Technology (B.Tech) in Biocomputational Engineering',
      institution: 'National Institute of Technology Calicut (NIT Calicut)',
      year: '2023 – 2027',
      description: 'Specialized in Artificial Intelligence, Machine Learning, and Software Engineering.',
    },
    {
      degree: 'ISRO Robotics Challenge – URSC 2024 (IRoC-U2024)',
      institution: 'ISRO - URSC',
      year: '2024',
      description: 'Participated in the ISRO Robotics Challenge (IRoC-U2024) and worked on robotics-related problem solving, teamwork, and engineering implementation.',
    },
  ],
};

export const skills = [
  {
    category: 'Programming',
    icon: '💻',
    items: [
      { name: 'Java', level: 85 },
      { name: 'Python', level: 90 },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      { name: 'React', level: 92 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: [
      { name: 'MongoDB', level: 82 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'SQL' },
    ],
  },
  {
    category: 'AI & LLMs / Machine Learning',
    icon: '🤖',
    items: [
      { name: 'ML for Data Science & Analytics' },
      { name: 'Supervised Learning Models' },
      { name: 'Unsupervised Learning Models' },
      { name: 'NumPy' },
      { name: 'Pandas' },
      { name: 'Matplotlib' },
      { name: 'Scikit-Learn' },
      { name: 'TensorFlow' },
      { name: 'Artificial Neural Networks (ANN)' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    items: [
      { name: 'AWS', level: 78 },
      { name: 'Vercel', level: 90 },
    ],
  },
];

export const projects = [
  {
    id: 'study-focus',
    title: 'Study Focus Chrome Extension',
    description:
      'A productivity Chrome extension that helps students maintain focus by blocking distracting websites, setting Pomodoro timers, tracking study sessions, and providing AI-powered study recommendations.',
    techStack: ['JavaScript', 'Chrome APIs', 'React', 'Tailwind CSS', 'IndexedDB'],
    githubUrl: 'https://github.com/gurramindra7-droid/study-focus',
    liveUrl: 'https://chromewebstore.google.com/detail/study-focus',
    image: null,
    gradient: 'from-blue-600 via-cyan-500 to-teal-400',
  },
  {
    id: 'amp-classification',
    title: 'Multi-Phase Deep Learning Framework for AMP Classification and Toxicity Prediction',
    description:
      'Developed a multi-phase machine learning framework for AMP classification, activity prediction, and toxicity analysis using more than 65,000 peptide sequences, achieving over 93% accuracy and 0.99 AUC through ensemble learning approaches. Built and deployed an end-to-end Streamlit web application integrating ProtT5 embeddings, advanced feature engineering, and CNN-BiLSTM based architectures for real-time peptide prediction and analysis.',
    techStack: ['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'Streamlit', 'XGBoost', 'LightGBM', 'CNN', 'BiLSTM', 'Transformer', 'ProtT5'],
    githubUrl: '#',
    liveUrl: '#',
    image: null,
    gradient: 'from-cyan-600 via-blue-500 to-indigo-600',
  },
  {
    id: 'sigma-ai',
    title: 'SIGMA AI — AI Assistant Platform',
    description:
      'An intelligent AI assistant powered by LangChain and RAG architecture. SIGMA AI leverages retrieval-augmented generation to provide context-aware responses from custom knowledge bases, with support for multi-modal inputs and agentic tool use.',
    techStack: ['Python', 'LangChain', 'LangGraph', 'OpenAI', 'ChromaDB', 'FastAPI'],
    githubUrl: 'https://github.com/gurramindra7-droid/sigma-ai',
    liveUrl: 'https://sigma-ai.vercel.app',
    image: null,
    gradient: 'from-purple-600 via-pink-500 to-red-500',
  },
];

export const experience = [
  {
    id: 1,
    type: 'experience',
    title: 'AWS Developer Intern — Suntech',
    date: 'May 2026 – July 2026',
    description:
      'Worked with AWS cloud services and deployment workflows. Assisted in cloud infrastructure setup and monitoring. Gained practical experience in cloud computing and DevOps practices.',
    tags: ['AWS', 'Cloud', 'DevOps', 'Infrastructure'],
  },
  {
    id: 2,
    type: 'experience',
    title: 'Robotics Program Contributor',
    date: '2025',
    description:
      'Contributed to robotics-related projects and technical activities. Worked on problem-solving, collaboration, and engineering implementation. Participated in robotics development and learning initiatives.',
    tags: ['Robotics', 'Engineering', 'Problem Solving'],
  },
  {
    id: 3,
    type: 'milestone',
    title: 'ISRO Robotics Challenge – URSC 2024 (IRoC-U2024)',
    date: '2024',
    description:
      'Participated in the ISRO Robotics Challenge and worked on robotics-related engineering tasks, teamwork, and problem-solving activities.',
    tags: ['ISRO', 'Robotics', 'IRoC-U2024'],
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

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
