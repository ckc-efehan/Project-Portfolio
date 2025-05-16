import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Efehan Cekic</h1>
        <nav className="header-nav">
          <ul>
            <li><a href="#about">Über mich</a></li>
            <li><a href="#projects">Projekte</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
