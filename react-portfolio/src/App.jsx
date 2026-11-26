import { useEffect, useState } from 'react'
import portrait from './assets/portrait.jpg'
import './App.css'

const projects = [
  {
    name: 'E-commerce website',
    category: 'ONLINE STORE',
    description: 'An online shopping experience designed to help customers browse products and shop with ease.',
    visual: 'shop',
    visualTitle: 'SHOP',
    visualDetail: 'BROWSE · CHOOSE · CHECK OUT',
  },
  {
    name: 'Online bus ticket booking',
    category: 'TRAVEL / BOOKING',
    description: 'A convenient way for travelers to explore bus trips and book tickets online.',
    visual: 'bus',
    visualTitle: 'YOUR NEXT TRIP',
    visualDetail: 'CHOOSE A ROUTE · BOOK A SEAT',
  },
  {
    name: 'Smart crop recommendation',
    category: 'AGRICULTURE / SMART TECH',
    description: 'A smart agriculture project focused on helping users find suitable crop recommendations.',
    visual: 'crop',
    visualTitle: 'GROW SMART',
    visualDetail: 'CROP RECOMMENDATIONS',
  },
  {
    name: 'MTU SIMS',
    category: 'STUDENT INFORMATION',
    description: 'A student information management system concept for organizing academic information and services.',
    visual: 'sims',
    visualTitle: 'STUDENT HUB',
    visualDetail: 'INFORMATION · SERVICES',
  },
  {
    name: 'MTU online voting system',
    category: 'ONLINE VOTING',
    description: 'An online voting system project designed to make campus voting easier to access.',
    visual: 'voting',
    visualTitle: 'YOUR VOTE',
    visualDetail: 'CAMPUS VOTING ONLINE',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const year = new Date().getFullYear()

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    revealElements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = `Portfolio message from ${name}`
    const body = `${message}\n\nFrom: ${name} (${email})`
    setFormStatus('Your message is ready in your email app. Please press send to finish.')
    window.setTimeout(() => {
      window.location.href = `mailto:asinakechgibore@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }, 700)
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Asinakech, home">
          <img className="profile-photo" src={portrait} alt="Portrait of Asinakech" />
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen((open) => !open)}>
          <span></span><span></span>
        </button>
        <nav className={`site-nav${menuOpen ? ' is-open' : ''}`} id="site-nav" aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot"></span> Portfolio <span className="eyebrow-divider">/</span> {year}</p>
            <h1 id="hero-title">Hello, I'm<br /><span>Asinakech</span><span className="hero-period">.</span></h1>
            <p className="hero-lede">Curious by nature. Creative by practice. Building a future in digital design and technology.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my work <span aria-hidden="true">↘</span></a>
              <a className="text-link" href="#about">A little about me <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-art reveal" aria-label="Portrait and colorful abstract artwork">
            <div className="art-grid"></div>
            <span className="art-index">01 / 06</span>
            <img className="hero-photo" src={portrait} alt="Portrait of Asinakech" />
            <div className="art-sun"></div>
            <div className="art-disc"></div>
            <div className="art-letter" aria-hidden="true">A</div>
            <div className="art-scribble" aria-hidden="true">✳</div>
            <p className="art-caption">A work in progress<br />and proud of it.</p>
          </div>
          <a className="scroll-cue" href="#about"><span></span> Scroll to discover</a>
          <span className="hero-side-note" aria-hidden="true">A PORTFOLIO IN MOTION</span>
        </section>

        <section className="about section-shell section-pad" id="about" aria-labelledby="about-title">
          <div className="section-heading reveal"><p className="eyebrow">01 <span className="eyebrow-divider">/</span> The person behind the pixels</p><h2 id="about-title">A bit about <span>me.</span></h2></div>
          <div className="about-layout">
            <div className="about-note reveal"><span className="note-mark" aria-hidden="true">“</span><p>Good work starts with curiosity: asking better questions, noticing the details, and making room for new ideas.</p><span className="note-signature">A thought I come back to</span></div>
            <div className="about-copy reveal"><p className="about-lede">I'm Asinakech, an aspiring digital creative who loves turning ideas into clear, welcoming experiences.</p><p>I'm exploring the worlds of design and technology one project at a time. I enjoy learning how things work, finding the simple idea inside a complicated problem, and making things that feel considered.</p><p>This portfolio is a snapshot of what I'm learning and where I'm headed. There's always more to discover, and that's the part I like most.</p><a className="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a></div>
          </div>
          <div className="about-stats reveal" aria-label="A few things about Asinakech"><div><span className="stat-number">01</span><span className="stat-label">Always learning</span></div><div><span className="stat-number">∞</span><span className="stat-label">Ideas in progress</span></div><div><span className="stat-number">100%</span><span className="stat-label">Curiosity powered</span></div></div>
        </section>

        <section className="skills section-shell section-pad" id="skills" aria-labelledby="skills-title">
          <div className="section-heading reveal"><p className="eyebrow">02 <span className="eyebrow-divider">/</span> Tools & ways of thinking</p><h2 id="skills-title">What I'm <span>learning.</span></h2></div>
          <div className="skills-layout"><p className="skills-intro reveal">A growing toolkit, shaped by practice and a willingness to try. These are the skills I'm building on right now.</p><div className="skill-list reveal">{[['HTML & CSS','FOUNDATIONS'],['JavaScript','IN PROGRESS'],['Visual design','PRACTICE'],['Communication','ALWAYS'],['Problem solving','ALWAYS']].map(([name, type], index) => <div className="skill-row" key={name}><span className="skill-number">{String(index + 1).padStart(2, '0')}</span><span className="skill-name">{name}</span><span className="skill-type">{type}</span></div>)}</div></div>
          <div className="skills-foot reveal"><span>OPEN TO LEARNING</span><span className="skills-foot-line"></span><span>ONE PROJECT AT A TIME</span></div>
        </section>

        <section className="projects section-shell section-pad" id="projects" aria-labelledby="projects-title">
          <div className="section-heading section-heading-row reveal"><div><p className="eyebrow">03 <span className="eyebrow-divider">/</span> Selected projects</p><h2 id="projects-title">Things I've <span>made.</span></h2></div><p className="heading-aside">A selection of my projects.<br />More work on the way.</p></div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card reveal" key={project.name}>
                <div className={`project-visual project-visual-${project.visual}`} aria-hidden="true">
                  <span className="visual-kicker">{project.category}</span>
                  <strong className="visual-title">{project.visualTitle}</strong>
                  <span className="visual-detail">{project.visualDetail}</span>
                  <span className="project-art-label">PROJECT / {String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="project-meta"><span>{String(index + 1).padStart(2, '0')} — PROJECT</span><span>{project.category}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a className="project-link" href="#contact">Discuss this project <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="education section-shell section-pad" id="education" aria-labelledby="education-title">
          <div className="section-heading reveal"><p className="eyebrow">04 <span className="eyebrow-divider">/</span> The learning never stops</p><h2 id="education-title">Always in <span>progress.</span></h2></div>
          <div className="education-layout"><p className="education-intro reveal">Every new skill starts somewhere. I'm building my knowledge through hands-on practice, new ideas, and the occasional happy accident.</p><div><div className="education-entry reveal"><span className="education-marker" aria-hidden="true"></span><div><span className="education-date">RIGHT NOW</span><h3>Independent learning</h3><p>Exploring design and web development through personal projects and practice.</p></div><span className="education-tag">ONGOING</span></div><div className="education-entry reveal"><span className="education-marker education-marker-outline" aria-hidden="true"></span><div><span className="education-date">NEXT CHAPTER</span><h3>Room to grow</h3><p>New subjects, new challenges, and plenty more to learn along the way.</p></div><span className="education-tag">UP NEXT</span></div></div></div>
        </section>

        <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
          <div className="contact-top reveal"><p className="eyebrow">05 <span className="eyebrow-divider">/</span> Have something in mind?</p><h2 id="contact-title">Let's make<br /><span>something good.</span></h2><p>Questions, ideas, or a kind hello: my inbox is open.</p><div className="contact-links" aria-label="Direct contact options"><a href="mailto:asinakechgibore@gmail.com">asinakechgibore@gmail.com <span aria-hidden="true">↗</span></a><a href="https://t.me/AsitWebdeveloper" target="_blank" rel="noopener noreferrer">Telegram — @AsitWebdeveloper <span aria-hidden="true">↗</span></a><a href="https://t.me/AsitSoftwareTechnology" target="_blank" rel="noopener noreferrer">Telegram — @AsitSoftwareTechnology <span aria-hidden="true">↗</span></a></div></div>
          <form className="contact-form reveal" onSubmit={handleSubmit}><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" type="text" placeholder="Name" autoComplete="name" required /><label htmlFor="contact-email">Your email</label><input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required /><label htmlFor="contact-message">A little about your idea</label><textarea id="contact-message" name="message" rows="3" placeholder="Write a message..." required></textarea><button className="button button-light" type="submit">Send message <span aria-hidden="true">↗</span></button><p className="form-status" aria-live="polite">{formStatus}</p></form>
          <div className="contact-footer"><span>ASINAKECH <span className="hero-period">.</span></span><a href="#home">Back to top ↑</a><span>MADE WITH CURIOSITY</span></div>
        </section>
      </main>
      <footer className="site-footer"><span>© {year} Asinakech</span><span>A little more every day.</span></footer>
    </>
  )
}

export default App
