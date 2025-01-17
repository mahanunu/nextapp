import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient">
      <div className="container">
        <section className="hero">
          <h1>Mahalia</h1>
          <div className="title-bar"></div>
          <h2>Développeuse Web Créative</h2>
        </section>

        <p className="intro">
          Passionnée par le développement web et la création d&apos;expériences
          numériques uniques. Je transforme vos idées en réalité avec élégance
          et innovation.
        </p>

        <div className="tech-stack">
          <div className="tech-item">React</div>
          <div className="tech-item">Next.js</div>
          <div className="tech-item">TypeScript</div>
          <div className="tech-item">Node.js</div>
          <div className="tech-item">Tailwind</div>
        </div>

        <div className="social">
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="social-link linkedin"
          >
            <Linkedin />
          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            className="social-link instagram"
          >
            <Instagram />
          </Link>

          <Link
            href="https://github.com"
            target="_blank"
            className="social-link github"
          >
            <Github />
          </Link>
        </div>
      </div>
    </main>
  );
}
