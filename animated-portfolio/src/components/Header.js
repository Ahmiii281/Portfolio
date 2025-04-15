import React from 'react';

function Header() {
    return (
        <header className="header">
            <h1>Bilal Ahmed</h1>
            <p>Email: bilal.ahmed@example.com | Phone: (987) 654-3210 | Address: 456 Elm St, City, Country</p>
            <p>
                <a href="https://www.linkedin.com/in/bilalahmed" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
        </header>
    );
}

export default Header;