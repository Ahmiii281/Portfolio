import React, { useState, useEffect } from 'react';
import './App.css';
import profileImg from './logo192.png';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`portfolio-container${theme === 'dark' ? ' dark' : ''}`}>
      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${10 + Math.random() * 20}s`
          }} />
        ))}
      </div>

      {/* Mouse Follower */}
      <div 
        className="mouse-follower"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10
        }}
      />

      <header className="portfolio-header">
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#awards">Awards</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>
      
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
          <div className="gradient-orb orb-3" />
        </div>
        <img src={profileImg} alt="Bilal Ahmed" className="hero-img" />
        <div className="hero-content">
          <h1>Bilal Ahmed</h1>
          <h2>Full Stack Web Developer</h2>
          <p>Building scalable, impactful products with modern web technologies. Open to opportunities at Google, Microsoft, and other top tech companies.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn primary">Contact Me</a>
            <a href="#contact" className="btn secondary">Download CV</a>
          </div>
        </div>
      </section>
      <main>
        <section id="about" className="portfolio-section">
          <h3>About Me</h3>
          <p>
            Experienced Full Stack Web Developer with a strong background in building robust, scalable web applications. Passionate about solving real-world problems and delivering high-quality code. Skilled in Python, C++, JavaScript, React, and more.
          </p>
        </section>
        <section id="skills" className="portfolio-section">
          <h3>Skills</h3>
          <div className="skills-grid">
            <div>
              <h4>Frontend</h4>
              <ul className="skills-list">
                <li>ReactJS</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div>
              <h4>Backend</h4>
              <ul className="skills-list">
                <li>Node.js</li>
                <li>PHP</li>
                <li>Python</li>
                <li>Flask</li>
                <li>FastAPI</li>
              </ul>
            </div>
            <div>
              <h4>Databases</h4>
              <ul className="skills-list">
                <li>MySQL</li>
                <li>SQL Server</li>
                <li>SQLite</li>
                <li>XAMPP</li>
              </ul>
            </div>
            <div>
              <h4>Tools & Platforms</h4>
              <ul className="skills-list">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Linux</li>
                <li>Windows</li>
                <li>OpenCV</li>
                <li>TensorFlow</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="projects" className="portfolio-section">
          <h3>Projects</h3>
          <div className="projects-showcase">
            <div className="project-card">
              <img src="https://placehold.co/400x200?text=Ecommerce" alt="Ecommerce website" />
              <div>
                <h4>Ecommerce Website</h4>
                <p>Full-featured ecommerce platform with modern UI, shopping cart, and payment integration.</p>
                <div className="tech-badges">
                  <span>React</span><span>PHP</span><span>MySQL</span><span>JS</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img src="https://placehold.co/400x200?text=Spotify+Clone" alt="Spotify Clone" />
              <div>
                <h4>Spotify Clone</h4>
                <p>Front-end clone of Spotify with playlist, play/pause, and responsive design.</p>
                <div className="tech-badges">
                  <span>HTML</span><span>CSS</span><span>JS</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img src="https://placehold.co/400x200?text=Weather+App" alt="Weather App" />
              <div>
                <h4>Weather App</h4>
                <p>Beautiful weather application with real-time updates, city suggestions, and dark/light mode toggle.</p>
                <div className="tech-badges">
                  <span>HTML</span><span>CSS</span><span>JavaScript</span><span>API</span>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <a href="https://weatherapp-pink-five.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gradient)', textDecoration: 'none', fontWeight: '600' }}>
                    🌐 Live Demo
                  </a>
                  <span style={{ margin: '0 0.5rem', color: 'rgba(255,255,255,0.5)' }}>|</span>
                  <a href="https://github.com/Ahmiii281/Weather-App.git" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gradient)', textDecoration: 'none', fontWeight: '600' }}>
                    📁 GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img src="https://placehold.co/400x200?text=Challan+Generator" alt="University Challan Generator" />
              <div>
                <h4>University Challan Generator</h4>
                <p>Automated system for generating student fee challans with validation and printing.</p>
                <div className="tech-badges">
                  <span>PHP</span><span>MySQL</span><span>HTML</span><span>CSS</span>
                </div>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </section>
        <section id="experience" className="portfolio-section">
          <h3>Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>Freelance Full Stack Developer</h4>
                <span>2022 - Present</span>
                <p>Developed multiple web applications for clients, focusing on scalable and maintainable solutions.</p>
              </div>
            </div>
            {/* Add more experience items as needed */}
          </div>
        </section>
        <section id="education" className="portfolio-section">
          <h3>Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>Bachelor of Science, Software Engineering</h4>
                <span>2022-2026 (Cont...)</span>
                <p>The University of Mianwali, Punjab, Pakistan | CGPA: 2.73/4.0</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>HSSC</h4>
                <span>2020-2022</span>
                <p>The Superior Group of Colleges, Quaidabad, Punjab, Pakistan | Marks: 815/1100</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>SSC</h4>
                <span>2018-2020</span>
                <p>Govt. High School, Shadia, Pakistan | Marks: 911/1100</p>
              </div>
            </div>
          </div>
        </section>
        <section id="awards" className="portfolio-section">
          <h3>Awards</h3>
          <ul className="awards-list">
            <li>DELTA BATCH Full Stack Development, Apna College, India</li>
            <li>GENZ CODING QUEST Coding Competition, University of Mianwali</li>
            <li>First Frontiers in Computational Intelligence & Data Science Conference 2025</li>
            <li>3rd Open International Internet Ecology Olympiad</li>
            <li>Police and Rescue Training, University of Mianwali</li>
          </ul>
        </section>
        <section id="contact" className="portfolio-section">
          <h3>Contact</h3>
          <div className="contact-grid">
            <div>
              <b>Address:</b> Mianwali, Pakistan
            </div>
            <div>
              <b>Cell:</b> +92 (318)-7584281
            </div>
            <div>
              <b>Email:</b> <a href="mailto:mr.bilal.ahmed281@gmail.com">mr.bilal.ahmed281@gmail.com</a>
            </div>
            <div>
              <b>LinkedIn:</b> <a href="https://linkedin.com/in/Bilal-Ahmed" target="_blank" rel="noopener noreferrer">Bilal-Ahmed</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="portfolio-footer">
        <p>&copy; {new Date().getFullYear()} Bilal Ahmed. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
