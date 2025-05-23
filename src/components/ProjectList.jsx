import React from 'react';
import ProjectItem from './ProjectItem';
import './ProjectList.css';

function ProjectList() {
  // Project data based on actual projects
  const projects = [
    {
      id: 1,
      title: "Online Shopping Application mit Microservices (Backend-Projekt)",
      description: "Entwicklung einer skalierbaren Microservice-Architektur für eine einfache Online-Shopping-Anwendung. Features: Service Discovery, zentralisierte Konfiguration, Distributed Tracing, Event-Driven Architecture, zentralisiertes Logging, Circuit Breaker, sichere Microservices mit Authentifizierungs- und Autorisierungsmechanismus durch Keycloak.",
      imageUrl: "https://via.placeholder.com/600x400?text=Microservice+Shopping+App",
      technologies: ["Java", "Spring Boot", "Spring Cloud", "Resilience4j", "Keycloak", "Kafka", "MongoDB", "Docker", "Kubernetes"],
      profileLink: "https://github.com/ckc-efehan?tab=repositories"
    },
    {
      id: 2,
      title: "Marathontrainingstagebuch",
      description: "Entwicklung einer webbasierten Full-Stack-Anwendung zur Dokumentation und Analyse von Laufzielen. Features: Zielerfassung, automatische Erfolgsauswertung, Statistiken (Gesamtkilometer, Trainingszeit) und CRUD-Funktionen für Einträge. Moderne Benutzeroberfläche mit responsivem Design und API-Integration.",
      imageUrl: "https://via.placeholder.com/600x400?text=Marathontrainingstagebuch",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "CI/CD-Pipelines", "RESTful APIs", "TypeScript", "Vue 3", "Node.js"],
      backendLink: "https://github.com/ckc-efehan/MarathonDiary",
      frontendLink: "https://github.com/ckc-efehan/MarathonDiary-frontend",
      deployedLink: "https://marathondiary-frontend.netlify.app"
    },
    {
      id: 3,
      title: "Login Menü Webseite",
      description: "Entwicklung eines Authentifizierungssystems mit Benutzerregistrierung und Login-Funktionalität. Features: Benutzerregistrierung mit Validierung und JWT-Token-Generierung, automatischer Versand von Bestätigungs-E-Mails über die SendGrid API bei Neuregistrierung, Login mit sicherer Authentifizierung und Weiterleitung zu einer Produktverwaltungsseite, Speicherung von Benutzer- und Produktdaten in einer PostgreSQL-Datenbank.",
      imageUrl: "https://via.placeholder.com/600x400?text=Login+Menu+Webseite",
      technologies: ["Java", "Spring Boot", "Security", "SendGrid API", "PostgreSQL", "JWT-Token", "TypeScript", "Vue 3", "Node.js"],
      backendLink: "https://github.com/ckc-efehan/OnlineShop",
      frontendLink: "https://github.com/ckc-efehan/OnlineShop-frontend",
      deployedLink: "https://loginmanager-frontend.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Meine Projekte</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectItem 
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              backendLink={project.backendLink}
              frontendLink={project.frontendLink}
              profileLink={project.profileLink}
              deployedLink={project.deployedLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
