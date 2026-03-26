import React, { useState, useEffect, useRef } from 'react';
import './App.css';

/* ─── PROJECT DATA ───────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    title: 'AI-PECO',
    category: 'AI',
    description:
      'AI-powered energy optimization system for PECO built as a Final Year Project. Integrates a FastAPI backend with machine-learning models, a React dashboard for real-time monitoring, and ESP32 IoT firmware for smart meter data acquisition.',
    tech: ['Python', 'FastAPI', 'React', 'ESP32', 'AI/ML'],
    github: 'https://github.com/Ahmiii281/AI-PECO',
    live: 'https://ai-peco.vercel.app',
    emoji: '⚡',
  },
  {
    id: 2,
    title: 'Swift-Converter',
    category: 'Web',
    description:
      'A multi-purpose SaaS conversion platform supporting image-to-text (OCR), PDF-to-Word, PPTX-to-PDF, and QR code generation. Built with a clean, fast UI and deployed on Vercel.',
    tech: ['React', 'JavaScript', 'Node.js', 'REST APIs'],
    github: 'https://github.com/Ahmiii281/Swift-Converter',
    live: 'https://swift-converter-sc.vercel.app',
    emoji: '🔄',
  },
  {
    id: 3,
    title: 'Islamic Portal',
    category: 'Web',
    description:
      'A comprehensive Islamic resource platform featuring Quran reading (with Arabic + translation), Hadith collections, Duas & Azkar, and location-based Prayer Times via external APIs.',
    tech: ['HTML', 'CSS', 'JavaScript', 'REST APIs'],
    github: 'https://github.com/Ahmiii281/Islamic-Portal',
    live: null,
    emoji: '🕌',
  },
  {
    id: 4,
    title: 'Weather App',
    category: 'Web',
    description:
      'Real-time weather application powered by the OpenWeather API. Features city search with auto-suggestions, current conditions, 5-day forecast, and a clean responsive UI.',
    tech: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
    github: 'https://github.com/Ahmiii281/Weather-App',
    live: 'https://weatherapp-pink-five.vercel.app',
    emoji: '🌦️',
  },
  {
    id: 5,
    title: 'CricPulse',
    category: 'Web',
    description:
      'A TypeScript-based cricket data platform providing live score updates, player statistics, and match schedules. Demonstrates strong type-safe frontend engineering practices.',
    tech: ['TypeScript', 'React', 'CSS Modules'],
    github: 'https://github.com/Ahmiii281/CricPulse',
    live: null,
    emoji: '🏏',
  },
  {
    id: 6,
    title: 'Sugarland Theater',
    category: 'Web',
    description:
      'A modern theater booking interface with seat selection, show listings, and a seamless ticket reservation flow. Focused on a polished, cinema-inspired UX.',
    tech: ['JavaScript', 'React', 'CSS'],
    github: 'https://github.com/Ahmiii281/Sugarland-Theater',
    live: 'https://sugarland-theater.vercel.app',
    emoji: '🎭',
  },
  {
    id: 7,
    title: 'Apple Store Clone',
    category: 'UI',
    description:
      "A pixel-accurate front-end clone of Apple's product store page, demonstrating mastery of responsive grid layouts, micro-animations, and Apple's minimalist design language.",
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Ahmiii281/Apple-Store',
    live: null,
    emoji: '🍎',
  },
  {
    id: 8,
    title: 'E-Commerce UI Design',
    category: 'UI',
    description:
      'A fully-designed e-commerce frontend including product listing, detail pages, shopping cart, and checkout flow. Showcases advanced CSS Grid/Flex layouts and component-driven UI thinking.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Ahmiii281/ecommerce-frontend-design',
    live: null,
    emoji: '🛍️',
  },
  {
    id: 9,
    title: 'Spotify Clone',
    category: 'UI',
    description:
      "A high-fidelity front-end replica of Spotify's Web Player with playlist sidebar, now-playing bar, and responsive card-based library layout — demonstrating advanced CSS skills.",
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Ahmiii281/Spotify-Clone',
    live: null,
    emoji: '🎵',
  },
  {
    id: 10,
    title: 'Advance Attendance System',
    category: 'System',
    description:
      'A robust PHP/MySQL web application for managing student attendance with role-based access (admin/teacher/student), automated reports, and PDF export functionality.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/Ahmiii281/Advance-Attendance-System',
    live: null,
    emoji: '📋',
  },
  {
    id: 11,
    title: 'Bakery Management System',
    category: 'System',
    description:
      'A full-featured business management system for a bakery — handling inventory, order processing, employee records, and sales reporting with a clean admin dashboard.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/Ahmiii281/bakery-management-system',
    live: null,
    emoji: '🥐',
  },
  {
    id: 12,
    title: 'QuickCart',
    category: 'Web',
    description:
      'A scalable e-commerce platform with user authentication, dynamic product management, order processing, and Firebase-powered backend. Features a modern shopping cart and secure payments flow.',
    tech: ['Next.js', 'Firebase', 'JavaScript'],
    github: 'https://github.com/Ahmiii281/QuickCart',
    live: 'https://quick-cart-shop.web.app/',
    emoji: '🛒',
  },
  {
    id: 13,
    title: 'AI Chatbot',
    category: 'AI',
    description:
      'An experimental AI-powered conversational chatbot built with Python and NLP techniques. Demonstrates understanding of intent classification, response generation, and AI integration patterns.',
    tech: ['Python', 'NLP', 'AI'],
    github: 'https://github.com/Ahmiii281/Chatbot',
    live: null,
    emoji: '🤖',
  },
  {
    id: 14,
    title: 'HexSoftwares Portfolio',
    category: 'UI',
    description:
      'A professional portfolio website developed during an internship assignment at HexSoftwares. Demonstrates clean HTML/CSS architecture and responsive design best practices.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Ahmiii281/HexSoftwares_Portfolio.',
    live: null,
    emoji: '💼',
  },
];

const CATEGORIES = ['All', 'AI', 'Web', 'System', 'UI'];

const SKILLS = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'ReactJS', 'Bootstrap', 'Responsive Design'],
  Backend: ['PHP', 'Python', 'FastAPI', 'Flask', 'Node.js', 'REST APIs'],
  Database: ['MySQL', 'SQLite', 'Firebase', 'SQL Server'],
  'Tools & DevOps': ['Git', 'GitHub', 'VS Code', 'Linux', 'XAMPP', 'Vercel'],
  'UI/UX & AI': ['Figma', 'UX Design', 'OpenCV', 'TensorFlow', 'NLP'],
};

/* ─── INTERSECTION OBSERVER HOOK ─────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── SECTION WRAPPER ────────────────────────────────────────────────────── */
function Section({ id, className, children }) {
  const ref = useReveal();
  return (
    <section id={id} className={`portfolio-section reveal ${className || ''}`} ref={ref}>
      {children}
    </section>
  );
}

/* ─── PROJECT CARD ───────────────────────────────────────────────────────── */
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-emoji">{project.emoji}</div>
      <div className="project-body">
        <div className="project-category-tag">{project.category}</div>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="tech-badges">
          {project.tech.map(t => <span key={t}>{t}</span>)}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link github-link">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-link live-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN APP ───────────────────────────────────────────────────────────── */
function App() {
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Loading screen
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  // Sticky nav shadow
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const filteredProjects =
    activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter);

  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <>
      {/* ── Loading Screen ── */}
      <div className={`loader-screen${loading ? '' : ' loader-hidden'}`}>
        <div className="loader-inner">
          <div className="loader-ring"></div>
          <div className="loader-name">Bilal Ahmed</div>
          <div className="loader-sub">Loading Portfolio…</div>
        </div>
      </div>

      <div className="portfolio-container">
        {/* ── Navigation ── */}
        <header className={`portfolio-header${scrolled ? ' scrolled' : ''}`}>
          <div className="nav-logo">
            <span className="logo-initial">BA</span>
            <span className="logo-text">Bilal Ahmed</span>
          </div>
          <nav className={`nav-links${navOpen ? ' open' : ''}`}>
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setNavOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="/Bilal_Ahmed_CV.pdf"
              className="nav-cta"
              download="Bilal_Ahmed_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setNavOpen(false)}
            >
              Download CV
            </a>
          </nav>
          <button
            className={`hamburger${navOpen ? ' active' : ''}`}
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
          >
            <span></span><span></span><span></span>
          </button>
        </header>

        {/* ── Hero ── */}
        <section className="hero-section" id="hero">
          <div className="hero-bg-pattern"></div>
          <div className="hero-content">
            <div className="hero-badge">👋 Available for Internship / Job</div>
            <h1 className="hero-name">Bilal Ahmed</h1>
            <h2 className="hero-role">
              <span className="role-chip">Software Engineer</span>
              <span className="role-sep">·</span>
              <span className="role-chip">Full Stack Developer</span>
              <span className="role-sep">·</span>
              <span className="role-chip">UX Designer</span>
            </h2>
            <p className="hero-tagline">
              I craft <strong>scalable web applications</strong> and <strong>AI-driven systems</strong> that solve
              real-world problems — from IoT energy optimization to SaaS platforms.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Hire Me</a>
              <a href="#projects" className="btn btn-outline">View Projects</a>
              <a
                href="/Bilal_Ahmed_CV.pdf"
                className="btn btn-ghost"
                download="Bilal_Ahmed_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                ↓ Download CV
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item"><span className="stat-num">14+</span><span className="stat-label">Projects</span></div>
              <div className="stat-divider"></div>
              <div className="stat-item"><span className="stat-num">3+</span><span className="stat-label">Certifications</span></div>
              <div className="stat-divider"></div>
              <div className="stat-item"><span className="stat-num">8wk</span><span className="stat-label">Internship</span></div>
            </div>
          </div>
          <div className="hero-scroll-cue">
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        <main>
          {/* ── About ── */}
          <Section id="about">
            <div className="section-header">
              <span className="section-label">Who I Am</span>
              <h3>About Me</h3>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  I'm <strong>Bilal Ahmed</strong>, a final-year <strong>BS Software Engineering</strong> student at the
                  University of Mianwali (2022–2026), passionate about building technology that matters. My journey spans
                  full-stack web development, AI-powered systems, and human-centered UX design.
                </p>
                <p>
                  As a <strong>Google-certified UX Designer</strong> and <strong>Google Prompting Essentials</strong> holder, I
                  bring a unique blend of engineering rigor and design thinking. My Final Year Project — <strong>AI-PECO</strong>{' '}
                  — integrates real-time IoT sensor data with machine-learning models to optimize energy consumption for a
                  real utility company.
                </p>
                <p>
                  I completed an <strong>8-week internship at Arch Technologies</strong>, where I contributed to production
                  web applications, collaborated with cross-functional teams, and sharpened my professional development
                  workflow. I actively participate in coding competitions and tech conferences, always chasing the next
                  challenge.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <span className="hi-icon">🎓</span>
                    <div>
                      <strong>BS Software Engineering</strong>
                      <small>University of Mianwali · Final Year</small>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="hi-icon">🎨</span>
                    <div>
                      <strong>Google UX Design Certificate</strong>
                      <small>Google Career Certificates</small>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="hi-icon">🏢</span>
                    <div>
                      <strong>Intern — Arch Technologies</strong>
                      <small>8-Week Full Stack Development</small>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="hi-icon">🤖</span>
                    <div>
                      <strong>AI/ML & IoT Projects</strong>
                      <small>FYP: AI-PECO Energy System</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-card-side">
                <div className="github-stats-card">
                  <h4>GitHub Activity</h4>
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=Ahmiii281&show_icons=true&theme=default&bg_color=e2e1df&title_color=5c341e&icon_color=5c341e&text_color=2f180b&border_color=d0c1a9&hide_border=false&count_private=true"
                    alt="Bilal Ahmed GitHub Stats"
                    loading="lazy"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ahmiii281&layout=compact&bg_color=e2e1df&title_color=5c341e&text_color=2f180b&border_color=d0c1a9"
                    alt="Top Languages"
                    loading="lazy"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>
            </div>
          </Section>

          {/* ── Skills ── */}
          <Section id="skills">
            <div className="section-header">
              <span className="section-label">What I Know</span>
              <h3>Skills &amp; Technologies</h3>
            </div>
            <div className="skills-grid">
              {Object.entries(SKILLS).map(([cat, items]) => (
                <div className="skill-category" key={cat}>
                  <h4>{cat}</h4>
                  <div className="skill-pills">
                    {items.map(skill => (
                      <span className="skill-pill" key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Projects ── */}
          <Section id="projects">
            <div className="section-header">
              <span className="section-label">What I've Built</span>
              <h3>Projects</h3>
            </div>
            <div className="filter-bar">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                  <span className="filter-count">
                    {cat === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
            <div className="projects-grid">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </Section>

          {/* ── Experience / Achievements ── */}
          <Section id="experience">
            <div className="section-header">
              <span className="section-label">My Journey</span>
              <h3>Experience &amp; Achievements</h3>
            </div>
            <div className="exp-grid">
              <div className="exp-column">
                <h4 className="exp-col-title">💼 Experience</h4>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="tl-dot"></div>
                    <div className="tl-content">
                      <div className="tl-date">2024 · 8 Weeks</div>
                      <h5>Software Engineering Intern</h5>
                      <div className="tl-org">Arch Technologies</div>
                      <p>
                        Contributed to production web applications, implemented responsive UI components, collaborated
                        in Agile sprints, and improved codebase quality through code reviews and refactoring initiatives.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="tl-dot"></div>
                    <div className="tl-content">
                      <div className="tl-date">2022 – Present</div>
                      <h5>Freelance Full Stack Developer</h5>
                      <div className="tl-org">Self-Employed</div>
                      <p>
                        Delivered custom web solutions for clients including e-commerce stores, management systems,
                        and responsive landing pages, maintaining a 100% client satisfaction record.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="exp-column">
                <h4 className="exp-col-title">🏆 Certifications &amp; Achievements</h4>
                <div className="achievements-list">
                  {[
                    { icon: '🎖️', title: 'Google UX Design Certificate', sub: 'Google Career Certificates' },
                    { icon: '🎖️', title: 'Google Prompting Essentials', sub: 'Google Career Certificates' },
                    { icon: '🥇', title: 'DELTA Batch — Full Stack Development', sub: 'Apna College, India' },
                    { icon: '🏅', title: 'GENZ CODING QUEST', sub: 'Coding Competition · University of Mianwali' },
                    { icon: '🔬', title: 'Frontiers in Computational Intelligence & Data Science Conference 2025', sub: 'Presenter · FCIDS 2025' },
                    { icon: '🌍', title: '3rd Open International Internet Ecology Olympiad', sub: 'International Participant' },
                    { icon: '🚨', title: 'Police & Rescue Training', sub: 'University of Mianwali' },
                  ].map(a => (
                    <div className="achievement-item" key={a.title}>
                      <span className="ach-icon">{a.icon}</span>
                      <div>
                        <strong>{a.title}</strong>
                        <small>{a.sub}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education sub-section */}
            <div className="education-block">
              <h4 className="exp-col-title" style={{ marginBottom: '1.5rem' }}>🎓 Education</h4>
              <div className="edu-grid">
                {[
                  { degree: 'BS Software Engineering', school: 'University of Mianwali, Punjab, Pakistan', year: '2022 – 2026', detail: 'CGPA: 2.73 / 4.0 · Final Year' },
                  { degree: 'Higher Secondary (HSSC)', school: 'The Superior Group of Colleges, Quaidabad', year: '2020 – 2022', detail: 'Marks: 815 / 1100' },
                  { degree: 'Secondary (SSC)', school: 'Govt. High School, Shadia, Pakistan', year: '2018 – 2020', detail: 'Marks: 911 / 1100' },
                ].map(edu => (
                  <div className="edu-card" key={edu.degree}>
                    <div className="edu-year">{edu.year}</div>
                    <h5>{edu.degree}</h5>
                    <p>{edu.school}</p>
                    <span className="edu-detail">{edu.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* ── Contact ── */}
          <Section id="contact">
            <div className="section-header">
              <span className="section-label">Get In Touch</span>
              <h3>Contact Me</h3>
            </div>
            <p className="contact-intro">
              I'm actively seeking <strong>internship and full-time opportunities</strong>. Whether you have a project in
              mind, want to collaborate, or just say hello — my inbox is always open.
            </p>
            <div className="contact-grid">
              <a href="mailto:mr.bilal.ahmed281@gmail.com" className="contact-card">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <span>mr.bilal.ahmed281@gmail.com</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/Bilal-Ahmed" target="_blank" rel="noopener noreferrer" className="contact-card">
                <span className="contact-icon">💼</span>
                <div>
                  <strong>LinkedIn</strong>
                  <span>linkedin.com/in/Bilal-Ahmed</span>
                </div>
              </a>
              <a href="https://github.com/Ahmiii281" target="_blank" rel="noopener noreferrer" className="contact-card">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                </span>
                <div>
                  <strong>GitHub</strong>
                  <span>github.com/Ahmiii281</span>
                </div>
              </a>
              <div className="contact-card no-link">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <span>Mianwali, Punjab, Pakistan</span>
                </div>
              </div>
              <a href="tel:+923187584281" className="contact-card">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <span>+92 (318) 758-4281</span>
                </div>
              </a>
            </div>
          </Section>
        </main>

        {/* ── Footer ── */}
        <footer className="portfolio-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="logo-initial">BA</span>
              <span>Bilal Ahmed</span>
            </div>
            <p>Crafted with ❤️ in Pakistan · {new Date().getFullYear()}</p>
            <div className="footer-links">
              <a href="https://github.com/Ahmiii281" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/Bilal-Ahmed" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:mr.bilal.ahmed281@gmail.com">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
