import React from 'react';

const projects = [
  {
    title: 'AI Student Predictor',
    description:
      'A predictive modeling project that uses student performance and background data to estimate course success probability.',
    tags: ['Machine Learning', 'Python', 'Analytics'],
    href: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Portfolio Website',
    description:
      'A React portfolio focused on clean storytelling, responsive structure, and a stronger visual identity.',
    tags: ['React', 'UI Design', 'Responsive'],
    href: 'https://github.com/yourusername/project2',
  },
  {
    title: 'Event Coordination Dashboard',
    description:
      'A dashboard concept for handling registrations, schedules, and volunteer coordination for student events.',
    tags: ['Dashboard', 'Data Flow', 'Operations'],
    href: 'https://github.com/yourusername/project3',
  },
];

function Projects() {
  return (
    <div className="page">
      <section className="page-intro">
        <p className="eyebrow">Featured Work</p>
        <h1 className="section-title">Projects with an analytical mindset.</h1>
        <p className="section-copy">
          These projects reflect how I combine data, AI, and front-end thinking to build tools that are
          practical, understandable, and visually polished.
        </p>
      </section>

      <section className="project-grid">
        {projects.map((project) => (
          <article className="project-card glass-card" key={project.title}>
            <p className="eyebrow">Case Study</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a href={project.href} target="_blank" rel="noreferrer">
              View Project
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Projects;
