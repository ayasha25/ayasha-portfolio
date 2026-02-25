import { useMemo, useState } from 'react'
import { projects } from './projects'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className={`app ${theme}`}>
      <div className="noise" />
      <header className="nav container">
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
            Building <span className="gradient">clean backends</span> and{' '}
            <span className="gradient-2">beautiful frontends</span> that scale.
          </h1>
          <p className="subtitle">
            I craft performant web products with JavaScript/TypeScript, modern frameworks,
            and thoughtful UX. From API design to pixel-perfect UI — I ship end-to-end.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn ghost" href="#contact">Let’s Build</a>
          </div>
        </section>

        <section id="projects" className="container section">
          <div className="section-head">
            <h2>Featured Projects</h2>
            <p>Data-driven cards from `src/projects.js`.</p>
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
          <div className="section-head"><h2>Stack</h2></div>
          <div className="stack-grid glass">
            <div><strong>Frontend</strong><p>React, Next.js, Tailwind, TypeScript</p></div>
            <div><strong>Backend</strong><p>Node.js, Express, Java, Spring Boot</p></div>
            <div><strong>Database</strong><p>PostgreSQL, MongoDB, Redis</p></div>
            <div><strong>Cloud & DevOps</strong><p>Docker, CI/CD, AWS, Vercel</p></div>
          </div>
        </section>

        <section id="contact" className="container section contact glass">
          <h2>Let’s build something people love.</h2>
          <p>Available for full-time roles, freelance, and collabs.</p>
          <a className="btn primary" href="mailto:ayasha@example.com">Email Me</a>
        </section>
      </main>

      <footer className="container footer">
        <span>© {year} Ayasha Pandey</span>
        <span>Made with ambition and caffeine ☕</span>
      </footer>
    </div>
  )
}
