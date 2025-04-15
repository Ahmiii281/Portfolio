import React, { useEffect, useState } from 'react';
import './styles/index.css';

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="portfolio">
            {/* Hero Section */}
            <header className="hero">
                <h1>Bilal Ahmed</h1>
                <p>Frontend Web Developer | Software Engineer | Problem Solver</p>
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
            </header>

            {/* About Section */}
            <section className="about">
                <h2>About Me</h2>
                <p>
                    I am a passionate Frontend Web Developer and Software Engineer with expertise in creating
                    responsive, user-friendly web applications. I enjoy solving complex problems and building
                    innovative solutions using modern technologies like React, JavaScript, and more.
                </p>
            </section>

            {/* Projects Section */}
            <section className="projects">
                <h2>Projects</h2>
                <div className="project-cards">
                    <div className="card">
                        <h3>Advance Attendance System</h3>
                        <p>
                            A PHP-based system for managing attendance records efficiently. Includes features like
                            student registration, attendance tracking, and reporting.
                        </p>
                        <a
                            href="https://github.com/Ahmiii281/Advance-Attendance-System"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                    </div>
                    <div className="card">
                        <h3>Swift Converter</h3>
                        <p>
                            A multi-functional web app for file conversions (PDF ↔ Word/Image, Image ↔ Text, etc.).
                            Built with JavaScript and PHP.
                        </p>
                        <a
                            href="https://github.com/Ahmiii281/Swift-Converter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                    </div>
                    <div className="card">
                        <h3>Chatbot</h3>
                        <p>
                            A Python-based chatbot using NLP techniques. Designed to simulate human-like conversations
                            with a user-friendly interface.
                        </p>
                        <a
                            href="https://github.com/Ahmiii281/Chatbot"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                    </div>
                    <div className="card">
                        <h3>Weather App</h3>
                        <p>
                            A JavaScript-based web app that fetches real-time weather data using the OpenWeatherMap API.
                            Displays temperature, humidity, and weather conditions.
                        </p>
                        <a
                            href="https://github.com/Ahmiii281/Weather-App"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                    </div>
                    <div className="card">
                        <h3>Islamic Portal</h3>
                        <p>
                            A Flutter-based mobile app for Quran reading, Hadith, Prayer Times, and more. Focused on
                            clean UI and offline capabilities.
                        </p>
                        <a
                            href="https://github.com/Ahmiii281/Islamic-Portal"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                    </div>
                    <div className="card">
                        <h3>Image Gallery</h3>
                        <p>
                            A JavaScript-based image gallery app with light/dark theme support. Allows users to browse
                            and view images in a responsive layout.
                        </p>
                        <a
                            href="https://github.com/Ahmiii281/Image_Gallery"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills">
    <h2>Skill Set</h2>
    <div className="skill-bars">
        <div className="skill">
            <span className="skill-name">HTML</span>
            <div className="skill-bar">
                <div className="skill-percentage" style={{ width: '80%' }}></div>
            </div>
        </div>
        <div className="skill">
            <span className="skill-name">CSS</span>
            <div className="skill-bar">
                <div className="skill-percentage" style={{ width: '65%' }}></div>
            </div>
        </div>
        <div className="skill">
            <span className="skill-name">JavaScript</span>
            <div className="skill-bar">
                <div className="skill-percentage" style={{ width: '40%' }}></div>
            </div>
        </div>
        <div className="skill">
            <span className="skill-name">ReactJS</span>
            <div className="skill-bar">
                <div className="skill-percentage" style={{ width: '90%' }}></div>
            </div>
        </div>
        <div className="skill">
            <span className="skill-name">Python</span>
            <div className="skill-bar">
                <div className="skill-percentage" style={{ width: '70%' }}></div>
            </div>
        </div>
        <div className="skill">
            <span className="skill-name">Figma</span>
            <div className="skill-bar">
                <div className="skill-percentage" style={{ width: '80%' }}></div>
            </div>
        </div>
    </div>
</section>

            {/* Footer Section */}
            <footer className="footer">
                <p>&copy; 2025 Bilal Ahmed. All rights reserved.</p>
                <div className="social-links">
                    <a href="www.linkedin.com/in/bilal-ahmed-26513b296" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="mailto:mr.bilal.ahmed281@gmail.com">Email</a>
                    <a href='https://github.com/Ahmiii281'>GitHub</a>
                </div>
            </footer>
        </div>
    );
}

export default App;