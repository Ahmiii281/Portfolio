// Bilal Ahmed Portfolio — React 18.2 LTS | Production Ready | June 2026
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const PROJECTS = [
  {
    id: 1,
    title: 'AI-PECO',
    category: ['AI', 'Web'],
    description:
      'AI-powered energy optimization system for PECO built as a Final Year Project. Integrates a FastAPI backend with machine-learning models, a React dashboard for real-time monitoring, and ESP32 IoT firmware for smart meter data acquisition.',
    tech: ['Python', 'FastAPI', 'React', 'ESP32', 'AI/ML'],
    github: 'https://github.com/Ahmiii281/AI-PECO',
    live: 'https://ai-peco-frontend.vercel.app',
    emoji: '⚡',
  },
  {
    id: 2,
    title: 'Swift-Converter',
    category: ['Web'],
    description:
      'A multi-purpose SaaS conversion platform supporting image-to-text (OCR), PDF-to-Word, PPTX-to-PDF, and QR code generation. Built with a clean, fast UI and deployed on Vercel.',
    tech: ['React', 'JavaScript', 'Node.js', 'REST APIs'],
    github: 'https://github.com/Ahmiii281/Swift-Converter',
    live: 'https://swift-converter-sc.vercel.app',
    emoji: '🔄',
  },
  {
    id: 4,
    title: 'Weather App',
    category: ['Web'],
    description:
      'Real-time weather application powered by the OpenWeather API. Features city search with auto-suggestions, current conditions, 5-day forecast, and a clean responsive UI.',
    tech: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
    github: 'https://github.com/Ahmiii281/Weather-App',
    live: 'https://weatherapp-pink-five.vercel.app',
    emoji: '🌦️',
  },
  {
    id: 6,
    title: 'Sugarland Theater',
    category: ['Web'],
    description:
      'A modern theater booking interface with seat selection, show listings, and a seamless ticket reservation flow. Focused on a polished, cinema-inspired UX.',
    tech: ['JavaScript', 'React', 'CSS'],
    github: 'https://github.com/Ahmiii281/Sugarland-Theater',
    live: 'https://sugarland-theater.vercel.app',
    emoji: '🎭',
  },
  {
    id: 9,
    title: 'Spotify Clone',
    category: ['UI'],
    description:
      "A high-fidelity front-end replica of Spotify's Web Player with playlist sidebar, now-playing bar, and responsive card-based library layout — demonstrating advanced CSS skills.",
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Ahmiii281/Spotify-Clone',
    live: null,
    emoji: '🎵',
  },
  {
    id: 11,
    title: 'Bakery Management System',
    category: ['System'],
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
    category: ['Web'],
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
    category: ['AI'],
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
    category: ['UI'],
    description:
      'A professional portfolio website developed during an internship assignment at HexSoftwares. Demonstrates clean HTML/CSS architecture and responsive design best practices.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Ahmiii281/HexSoftwares_Portfolio',
    live: null,
    emoji: '💼',
  },
];

const CATEGORIES = ['All', 'AI', 'Web', 'System', 'UI'];

const SKILLS = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'ReactJS', 'Bootstrap', 'Responsive Design'],
  Backend: ['Python', 'FastAPI', 'Node.js', 'PHP', 'REST APIs'],
  'AI / Machine Learning': ['Python', 'TensorFlow', 'NLP', 'Scikit-Learn', 'Pandas'],
  Database: ['MySQL', 'SQLite', 'Firebase', 'SQL Server'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Linux', 'Vercel', 'Figma', 'UX Design'],
};

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function Section({ id, className, children }) {
  const ref = useReveal();
  return (
    <section id={id} className={`portfolio-section reveal ${className || ''}`} ref={ref}>
      {children}
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-emoji">{project.emoji}</div>
      <div className="project-body">
        <div className="project-category-tag">{project.category.join(', ')}</div>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="tech-badges">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
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
    </article>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category.includes(activeFilter));

  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <>
      <div className={`loader-screen${loading ? '' : ' loader-hidden'}`}>
        <div className="loader-inner">
          <div className="loader-ring" />
          <div className="loader-name">Bilal Ahmed</div>
          <div className="loader-sub">Preparing your portfolio experience...</div>
        </div>
      </div>

      <div className="portfolio-container">
        <header className={`portfolio-header${scrolled ? ' scrolled' : ''}`}>
          <div className="nav-logo">
            <span className="logo-initial">BA</span>
            <span className="logo-text">Bilal Ahmed</span>
          </div>

          <nav className={`nav-links${navOpen ? ' open' : ''}`}>
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setNavOpen(false)}>
                {link}
              </a>
            ))}
            <a href="/Bilal_Ahmed_CV.pdf" download="Bilal_Ahmed_CV.pdf" className="nav-cta" onClick={() => setNavOpen(false)}>
              Download CV
            </a>
          </nav>

          <button
            className={`hamburger${navOpen ? ' active' : ''}`}
            onClick={() => setNavOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </header>

        <section className="hero-section" id="hero">
          <div className="hero-bg-pattern" />

          <div className="hero-text-col">
            <span className="hero-badge">Available for Internship & Job Opportunities</span>
            <h1 className="hero-name">Bilal Ahmed</h1>
            <p className="hero-role">
              Software Engineer · Full Stack Developer · UX-Focused Creator
            </p>
            <p className="hero-tagline">
              I build polished web applications, intuitive user experiences, and AI-enhanced solutions that help teams scale and deliver fast.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Hire Me</a>
              <a href="#projects" className="btn btn-outline">View Work</a>
              <a href="/Bilal_Ahmed_CV.pdf" download="Bilal_Ahmed_CV.pdf" className="btn btn-ghost">
                ↓ Download CV
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">14+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num">5+</span>
                <span className="stat-label">Certifications</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num">10wks</span>
                <span className="stat-label">Internships</span>
              </div>
            </div>
          </div>

          <div className="hero-img-col">
            <div className="hero-img-scene">
              <div className="img-blob-bg" />
              <div className="img-ring-outer">
                <div className="img-ring-inner" />
              </div>
              <div className="img-glow-pulse" />
              <div className="img-glass-card">
                <img
                  src="/my_pic.jpeg"
                  alt="Bilal Ahmed"
                  className="hero-portrait"
                  loading="eager"
                />
                <div className="img-reflection" />
              </div>
              <div className="img-dot img-dot-1" />
              <div className="img-dot img-dot-2" />
              <div className="img-dot img-dot-3" />
            </div>
          </div>

          <div className="hero-scroll-cue">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>
        </section>

        <main>
          <Section id="about">
            <div className="section-header">
              <span className="section-label">Who I Am</span>
              <h3>About Me</h3>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  I'm <strong>Bilal Ahmed</strong>, a final-year <strong>BS Software Engineering</strong> student at the University of Mianwali. I craft full-stack web experiences and AI-powered systems using modern tools, while focusing on usability and performance.
                </p>
                <p>
                  My Final Year Project, <strong>AI-PECO</strong>, combines IoT data collection, machine learning, and a React-based dashboard to optimize energy usage for real-world client needs. I also hold Google UX Design and Google Prompting Essentials certifications.
                </p>
                <p>
                  I have completed internships with DevelopersHub Corporation and HexSoftwares, where I built responsive interfaces, reusable component systems, and polished UI workflows. I enjoy turning complex problems into simple, user-first applications.
                </p>

                <div className="about-highlights">
                  <div className="highlight-item">
                    <span className="hi-icon">🎓</span>
                    <div>
                      <strong>BS Software Engineering</strong>
                      <small>University of Mianwali</small>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="hi-icon">🎨</span>
                    <div>
                      <strong>Google UX Design</strong>
                      <small>Google Career Certificates</small>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="hi-icon">🏢</span>
                    <div>
                      <strong>DevelopersHub Internship</strong>
                      <small>Frontend Web Development</small>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="hi-icon">🤖</span>
                    <div>
                      <strong>AI & IoT Projects</strong>
                      <small>FYP: AI-PECO Energy System</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section id="skills">
            <div className="section-header">
              <span className="section-label">What I Know</span>
              <h3>Skills & Technologies</h3>
            </div>
            <div className="skills-grid">
              {Object.entries(SKILLS).map(([category, skills]) => (
                <div className="skill-category" key={category}>
                  <h4>{category}</h4>
                  <div className="skill-pills">
                    {skills.map((skill) => (
                      <span className="skill-pill" key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="projects">
            <div className="section-header">
              <span className="section-label">Featured Work</span>
              <h3>Projects</h3>
            </div>

            <div className="filter-bar">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter-btn${activeFilter === category ? ' active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                  <span className="filter-count">
                    {category === 'All'
                      ? PROJECTS.length
                      : PROJECTS.filter((project) => project.category.includes(category)).length}
                  </span>
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </Section>

          <Section id="experience">
            <div className="section-header">
              <span className="section-label">My Journey</span>
              <h3>Experience & Achievements</h3>
            </div>

            <div className="exp-grid">
              <div className="exp-column">
                <h4 className="exp-col-title">Experience</h4>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="tl-dot" />
                    <div className="tl-content">
                      <div className="tl-date">May 2025 – June 2025 · 6 Weeks</div>
                      <h5>Frontend Web Developer Intern</h5>
                      <div className="tl-org">DevelopersHub Corporation</div>
                      <p>
                        Built responsive frontend components, improved application accessibility, and collaborated with designers to deliver polished features using modern web tools.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="tl-dot" />
                    <div className="tl-content">
                      <div className="tl-date">April 2025 – May 2025 · 4 Weeks</div>
                      <h5>Frontend Web Developer Intern</h5>
                      <div className="tl-org">HexSoftwares</div>
                      <p>
                        Translated UI designs into production-ready pages, optimized interactions, and supported cross-browser performance for client projects.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="tl-dot" />
                    <div className="tl-content">
                      <div className="tl-date">2022 – Present</div>
                      <h5>Freelance Developer</h5>
                      <div className="tl-org">Self-Employed</div>
                      <p>
                        Delivered web solutions for startups and local businesses, focusing on clean interfaces, fast performance, and maintainable code.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="exp-column">
                <h4 className="exp-col-title">Achievements</h4>
                <div className="achievements-list">
                  {[
                    { icon: '🎖️', title: 'Google UX Design Certificate', sub: 'Google Career Certificates' },
                    { icon: '🎖️', title: 'Google Prompting Essentials', sub: 'Google Career Certificates' },
                    { icon: '🥇', title: 'DELTA Full Stack Development', sub: 'Apna College' },
                    { icon: '🏅', title: 'GENZ Coding Quest', sub: 'University of Mianwali' },
                    { icon: '🔬', title: 'FCIDS 2025 Speaker', sub: 'Computational Intelligence Conference' },
                    { icon: '🌍', title: 'Internet Ecology Olympiad', sub: 'International Participant' },
                  ].map((achievement) => (
                    <div className="achievement-item" key={achievement.title}>
                      <span className="ach-icon">{achievement.icon}</span>
                      <div>
                        <strong>{achievement.title}</strong>
                        <small>{achievement.sub}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="education-block">
              <h4 className="exp-col-title" style={{ marginBottom: '1.5rem' }}>Education</h4>
              <div className="edu-grid">
                {[
                  {
                    degree: 'BS Software Engineering',
                    school: 'University of Mianwali',
                    year: '2022 – 2026',
                    detail: 'CGPA: 2.76 / 4.0 · Final Year',
                  },
                  {
                    degree: 'HSSC',
                    school: 'Superior Group of Colleges, Quaidabad',
                    year: '2020 – 2022',
                    detail: 'Marks: 815 / 1100',
                  },
                  {
                    degree: 'SSC',
                    school: 'Govt. High School, Shadia',
                    year: '2018 – 2020',
                    detail: 'Marks: 911 / 1100',
                  },
                ].map((item) => (
                  <div className="edu-card" key={item.degree}>
                    <div className="edu-year">{item.year}</div>
                    <h5>{item.degree}</h5>
                    <p>{item.school}</p>
                    <span className="edu-detail">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section id="contact">
            <div className="section-header">
              <span className="section-label">Get in Touch</span>
              <h3>Contact Me</h3>
            </div>
            <p className="contact-intro">
              I am available for internships and full-time roles. Reach out if you want to build thoughtful products, optimize your web presence, or collaborate on AI-enabled solutions.
            </p>
            <div className="contact-grid">
              <a href="mailto:mr.bilal.ahmed281@gmail.com" className="contact-card">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <span>mr.bilal.ahmed281@gmail.com</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/Bilal-Ahmed-26513b296" target="_blank" rel="noopener noreferrer" className="contact-card">
                <span className="contact-icon">💼</span>
                <div>
                  <strong>LinkedIn</strong>
                  <span>Bilal Ahmed</span>
                </div>
              </a>
              <a href="https://github.com/Ahmiii281" target="_blank" rel="noopener noreferrer" className="contact-card">
                <span className="contact-icon">🐙</span>
                <div>
                  <strong>GitHub</strong>
                  <span>@Ahmiii281</span>
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

        <footer className="portfolio-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="logo-initial">BA</span>
              <span>Bilal Ahmed</span>
            </div>
            <p>Built with care in Pakistan · {new Date().getFullYear()}</p>
            <div className="footer-links">
              <a href="https://github.com/Ahmiii281" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/Bilal-Ahmed-26513b296" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:mr.bilal.ahmed281@gmail.com">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
