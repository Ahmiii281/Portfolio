import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2023 Bilal Ahmed. All rights reserved.</p>
            <p>
                <a href="https://www.linkedin.com/in/bilalahmed" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span> | </span>
                <a href="https://github.com/bilalahmed" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
        </footer>
    );
}

export default Footer;