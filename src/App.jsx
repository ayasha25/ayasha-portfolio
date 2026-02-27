import { useMemo, useState } from 'react'
import { projects } from './projects'

const skillPills = [
  'React',
  'Next.js',
  'Tailwind CSS',
  'SEO',
  'TypeScript',
  'Node.js',
  'Express',
  'PostgreSQL'
]

export default function App() {
  const [theme, setTheme] = useState('dark')
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className={`app ${theme}`}>
      <div className="noise" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <header className="nav container glass">
        <a href="#" className="brand">Ayasha<span>25</span></a>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
          <button
            className="theme-toggle"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <p className="kicker">FULL STACK DEVELOPER</p>
          <h1>
            I build <span className="gradient">high-converting web products</span> with{' '}
            <span className="gradient-2">frontend polish + backend reliability</span>.
          </h1>
          <p className="subtitle">
            Full-stack dev focused on React + Next.js experiences, Tailwind-powered UI systems,
            scalable APIs, and SEO-first architecture that helps products rank and grow.
          </p>

          <div className="cta-row">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn ghost" href="#contact">Hire Me</a>
          </div>

          <div className="skills-row">
            {skillPills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section id="projects" className="container section">
          <div className="section-head">
            <h2>Featured Projects</h2>
            <p>Product-focused builds with modern stack choices.</p>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <article key={p.title} className="project glass">
                <div className="project-top">
                  <span className="pill">{p.type}</span>
                  <span>{p.year}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="container section">
          <div className="section-head"><h2>Tech Stack</h2></div>
          <div className="stack-grid glass">
            <div><strong>Frontend</strong><p>React, Next.js, Tailwind CSS, TypeScript</p></div>
            <div><strong>Backend</strong><p>Node.js, Express, REST APIs, Java, Spring Boot</p></div>
            <div><strong>Data Layer</strong><p>PostgreSQL, MongoDB, Redis</p></div>
            <div><strong>Performance & SEO</strong><p>Core Web Vitals, Metadata, Structured Data, SSR/SSG</p></div>
          </div>
        </section>

        <section id="contact" className="container section contact glass">
          <h2>Let’s build something fast, beautiful, and discoverable.</h2>
          <p>Open to full-time roles, freelance, and product collaborations.</p>
          <a className="btn primary" href="mailto:ayasha@example.com">Email Me</a>
        </section>
      </main>

      <footer className="container footer">
        <span>© {year} Ayasha Pandey</span>
        <span>Designed + developed with ambition and caffeine ☕</span>
      </footer>
    </div>
  )
}
