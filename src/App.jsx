
import './App.css';
import Reveal from './Reveal';

const projects = [
  {
    number: '01',
    name: 'CodePet',
    type: 'PERSONAL PROJECT',
    description:
      'A productivity companion that combines a Pomodoro timer, streak tracking and an evolving virtual pet.',
    technologies: ['Python', 'FastAPI', 'HTML', 'CSS', 'JavaScript'],
    status: 'Deployed',
  },
  {
    number: '02',
    name: 'Academic Portal',
    type: 'ACADEMIC PROJECT',
    description:
      'A department management platform designed to organize student records, attendance, assignments and marks.',
    technologies: ['React', 'JavaScript', 'Python', 'PostgreSQL'],
    status: 'In development',
  },
  {
    number: '03',
    name: 'Code Catalyst',
    type: 'COLLABORATIVE WORK',
    description:
      'Contributing to a technology community website through frontend design and interactive web experiences.',
    technologies: ['React', 'CSS', 'JavaScript'],
    status: 'Contribution',
  },
];

const skillGroups = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'FastAPI'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'Exploring',
    skills: ['Machine Learning', 'Data Science', 'AI'],
  },
];

function App() {
  return (
    <div className="site-wrapper">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Aditya Modi<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's talk ↗
        </a>
      </nav>

      <main>

        {/* Hero section */}
        <section className="hero section" id="home">

          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              BCA UNDERGRADUATE · BUILDING & LEARNING
            </div>

            <p className="eyebrow">HELLO, WORLD! I'M</p>

            <h1>
              Aditya <span>Modi.</span>
            </h1>

            <h2>
              Building things with code
              <br />
              and <span>curiosity.</span>
            </h2>

            <p className="hero-description">
              I'm a computer applications student exploring software
              development, Artificial Intelligence and Data Science.
              I enjoy turning ideas into things people can actually use.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore my work ↗
              </a>

              <a href="#about" className="secondary-button">
                More about me
              </a>
            </div>
          </div>

          {/* Personal photograph */}
          <div className="hero-visual">
            <div className="profile-frame">
              <img
                src="/images/profile.png"
                alt="Aditya Modi"
                className="profile-image"
              />
            </div>

            <p className="photo-caption">
              A little corner of my world.
            </p>
          </div>

        </section>

        {/* About section */}
        <Reveal>
        <section className="section about-section" id="about">
          <p className="eyebrow">01 / A LITTLE ABOUT ME</p>

          <h2 className="section-heading">
            Curious mind. <span>Builder's mindset.</span>
          </h2>

          <p className="about-description">
            I'm currently pursuing my Bachelor's in Computer Applications.
            My interests lie in understanding how technology works and
            using that knowledge to build meaningful projects. I'm
            particularly interested in the intersection of software,
            Artificial Intelligence and Data Science.
          </p>
        </section>
        </Reveal>

        {/* Projects section */}
        <section className="section projects-section" id="projects">
          <p className="eyebrow">02 / SELECTED WORK</p>

          <h2 className="section-heading">
            Things I've <span>been building.</span>
          </h2>

          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal key={project.number} delay={index * 180}>
                <article className="project-card">


                <div className="project-top">
                  <span>
                    {project.number} / {project.type}
                  </span>

                  <span className="project-arrow">↗</span>
                </div>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-status">
                  <span className="status-dot"></span>
                  {project.status}
                </div>
              </article>
            </Reveal>
            ))}
          </div>
        </section>

        {/* Technology stack */}
        <Reveal>
        <section className="section stack-section" id="stack">
          <p className="eyebrow">03 / MY TOOLKIT</p>

          <h2 className="section-heading">
            Technologies I'm <span>working with.</span>
          </h2>

          <div className="stack-grid">
            {skillGroups.map((group) => (
              <div className="stack-card" key={group.title}>
                <h3>{group.title}</h3>

                <div className="tech-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        </Reveal>

        {/* Contact section */}
        <Reveal>
        <section className="section contact-section" id="contact">
          <p className="eyebrow">04 / GET IN TOUCH</p>

          <h2>
            Have an interesting idea?
            <br />
            <span>Let's connect.</span>
          </h2>

          <p>
            I'm always interested in learning, collaborating and
            connecting with people who love building things.
          </p>

          <a
            href="mailto:adityamodi2703@gmail.com.com"
            className="primary-button"
          >
            Say hello ↗
          </a>
          <div className="social-links">
          <a
            href="https://github.com/adityamodi334"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/not-that-modiii"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
        </section>
        </Reveal>

      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="logo">
          Aditya Modi<span>.</span>
        </a>

        <p>Designed & built by Aditya Modi.</p>

        <a href="#home">Back to top ↑</a>
      </footer>

    </div>
  );
}

export default App;
