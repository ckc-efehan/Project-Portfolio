import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Kontaktiere Mich</h3>
          <p>Kontaktiere mich gerne, wenn du einen Entwickler suchst, eine Frage hast oder einfach in Kontakt treten möchtest.</p>
          <ul className="contact-list">
            <li>
              <i className="icon-email"></i>
              <a href="mailto:efehancekic436@gmail.com">efehancekic436@gmail.com</a>
            </li>
            <li>
              <i className="icon-phone"></i>
              <a href="tel:015560839793">015560839793</a>
            </li>
            <li>
              <i className="icon-github"></i>
              <a href="https://github.com/ckc-efehan" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <i className="icon-linkedin"></i>
              <a href="https://linkedin.com/in/efehan-cekic" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Schnelllinks</h3>
          <ul className="footer-links">
            <li><a href="#about">Über mich</a></li>
            <li><a href="#projects">Projekte</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Efehan Cekic. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}

export default Footer;
