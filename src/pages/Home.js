import './Home.css';
import profileImg from '../assets/profile.jpg';

const skills = [
  'C, C++, Java, Python, JavaScript',
  'React, HTML, CSS, responsive UI',
  'Pandas, NumPy, Scikit-learn, Power BI',
  'Git, GitHub, VS Code, Jupyter',
];

const highlights = [
  {
    title: 'AI Resume Screening System',
    text: 'Built an NLP-driven candidate ranking workflow that helps surface the most relevant profiles faster.',
  },
  {
    title: 'Student Event Dashboard',
    text: 'Created a coordination dashboard for registrations, schedules, and volunteers to improve event execution.',
  },
  {
    title: 'AIC Mahindra Volunteer',
    text: 'Supported innovation events with logistics, communication, and data-backed coordination for large teams.',
  },
];

const facts = [
  {
    label: 'Education',
    value: 'BTech in Artificial Intelligence, Mahindra University',
  },
  {
    label: 'Timeline',
    value: '2023 to 2027',
  },
  {
    label: 'Focus',
    value: 'Data analytics, NLP, intelligent systems',
  },
];

const researchInterests = [
  'Natural Language Processing and intelligent text systems',
  'Data analytics for decision-making and pattern discovery',
  'Machine learning models for practical prediction problems',
  'Human-friendly interfaces for data-driven products',
];

const certifications = [
  'IIM Mumbai - Generative AI for Business Decision-Making',
  'Institute of Risk Management - Level 1',
  'Mastercard Cybersecurity Simulation',
  'Power BI Workshop',
  'MATLAB Onramp',
];

function Home() {
  return (
    <div className="page home-page">
      <section className="hero-panel glass-card">
        <div className="hero-copy">
          <p className="eyebrow">Aspiring Data Analyst and AI Enthusiast</p>
          <h1 className="section-title">Building clear, data-driven experiences from complex information.</h1>
          <p className="section-copy">
            I am Aditya Goyal, a BTech Artificial Intelligence student who enjoys turning raw data into
            useful insight, practical systems, and polished digital experiences.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#contact">
              Contact Me
            </a>
            <a className="secondary-action" href="#highlights">
              Explore Work
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <img src={profileImg} alt="Aditya Goyal" />
          </div>
          <div className="hero-stats">
            <div>
              <strong>AI</strong>
              <span>NLP, analytics, decision systems</span>
            </div>
            <div>
              <strong>Web</strong>
              <span>Responsive React interfaces</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-grid">
        {facts.map((fact) => (
          <article className="info-tile glass-card" key={fact.label}>
            <p>{fact.label}</p>
            <h3>{fact.value}</h3>
          </article>
        ))}
      </section>

      <section className="section-grid content-grid" id="highlights">
        <article className="content-card glass-card">
          <p className="eyebrow">About</p>
          <h2>What I bring</h2>
          <p>
            I enjoy solving real-world problems with data, whether that means creating predictive models,
            structuring dashboards, or shaping cleaner user experiences around information.
          </p>
        </article>

        <article className="content-card glass-card">
          <p className="eyebrow">Skills</p>
          <h2>Core stack</h2>
          <ul className="tag-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="feature-stack">
        {highlights.map((item) => (
          <article className="feature-card glass-card" key={item.title}>
            <p className="eyebrow">Highlight</p>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="content-card glass-card">
        <p className="eyebrow">Research Interests</p>
        <h2>Areas I want to explore deeply</h2>
        <ul className="simple-list">
          {researchInterests.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-grid">
        <article className="content-card glass-card">
          <p className="eyebrow">Achievements</p>
          <h2>Milestones</h2>
          <ul className="simple-list">
            <li>Merit Scholarship, 2023 to 2024</li>
            <li>Certified swimmer</li>
            <li>Hands-on exposure to analytics and cybersecurity programs</li>
          </ul>
        </article>

        <article className="content-card glass-card" id="contact">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s connect</h2>
          <div className="contact-list">
            <a href="tel:+919836863651">+91 9836863651</a>
            <a href="mailto:adityavikash2006@gmail.com">adityavikash2006@gmail.com</a>
            <a href="mailto:se23uari003@mahindrauniversity.edu.in">
              se23uari003@mahindrauniversity.edu.in
            </a>
            <a href="https://linkedin.com/in/aditya-goyal-62410a265" target="_blank" rel="noreferrer">
              linkedin.com/in/aditya-goyal-62410a265
            </a>
          </div>
        </article>
      </section>

      <section className="content-card glass-card certification-card">
        <p className="eyebrow">Certifications</p>
        <h2>Learning and credentials</h2>
        <ul className="tag-list">
          {certifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
