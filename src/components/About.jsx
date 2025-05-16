import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">Über Mich</h2>
        <div className="about-content">
          <div className="about-image">
            {/* Replace with your actual image */}
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQHaFLnTkQB4lw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729159305050?e=1752710400&v=beta&t=eg8a0GokEOW6irKARAExhCOhmN-16-2w52qNCPgvCSg" alt="Efehan Cekic" />
          </div>
          <div className="about-text">
            <h3>Hallo, ich bin Efehan Cekic</h3>
            <p>
              Ich bin Student im 5. Semester des Wirtschaftsinformatik Bachelor-Studiengangs an der HTW Berlin und ein leidenschaftlicher Entwickler mit besonderer Expertise in Java-Programmierung und im Aufbau von Webanwendungen.
              Meine Reise in der Softwareentwicklung begann mit einer Neugier darüber, wie Websites funktionieren, 
              und hat sich zu einer professionellen Karriere entwickelt, in der ich robuste und benutzerfreundliche Anwendungen erstelle.
            </p>
            <p>
              Mein Fokus liegt auf der Backend-Entwicklung mit Java, wo meine Hauptexpertise liegt,
              aber ich arbeite auch mit Frontend-Technologien wie Vue. 
              Ich löse gerne komplexe Probleme und verwandle Ideen durch Code in die Realität. Mein Ziel ist es, Softwareentwickler zu werden und innovative Lösungen mit Java und anderen Technologien zu schaffen.
            </p>
            <div className="skills">
              <h4>Meine Fähigkeiten</h4>
              <ul className="skills-list">
                <li>Java</li>
                <li>JavaScript</li>
                <li>Microservices</li>
                <li>Spring Boot</li>
                <li>OAuth</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Rest-APIs</li>
                <li>Postman</li>
                <li>Vue3</li>
              </ul>
            </div>
            <a href="#contact" className="cta-button">Kontaktiere Mich</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
