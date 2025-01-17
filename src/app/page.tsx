import Link from 'next/link'
import { Github, Linkedin, Instagram } from 'lucide-react'

export default function Home() {
  return (
    <main className="portfolio-container">
      <div className="content-wrapper">
        <h1 className="main-title">Mahalia</h1>
        <h2 className="subtitle">Développeuse Web</h2>
        
        <p className="description">
          Bienvenue sur mon portfolio. Je suis une développeuse web passionnée
          par la création d'expériences numériques exceptionnelles.
        </p>

        <div className="skills-section">
          <h3>Compétences</h3>
          <div className="skills-list">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">CSS</span>
          </div>
        </div>

        <div className="social-links">
          <Link 
            href="https://linkedin.com" 
            target="_blank"
            className="social-button"
          >
            <Linkedin className="icon" />
            <span>LinkedIn</span>
          </Link>

          <Link 
            href="https://instagram.com" 
            target="_blank"
            className="social-button"
          >
            <Instagram className="icon" />
            <span>Instagram</span>
          </Link>

          <Link 
            href="https://github.com" 
            target="_blank"
            className="social-button"
          >
            <Github className="icon" />
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </main>
  )
}