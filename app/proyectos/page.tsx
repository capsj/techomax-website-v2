import type { Metadata } from "next"
import Blobs, { heroBlobs } from "@/components/Blobs"
import Reveal from "@/components/Reveal"
import SiteShell from "@/components/SiteShell"
import Tag from "@/components/Tag"
import { proyectos } from "@/lib/content"

export const metadata: Metadata = {
  title: "Techo Max - Proyectos",
  description:
    "Explora los proyectos de TechoMax: soluciones de impermeabilización para tinglados industriales, grandes superficies, losas transitables y solados continuos. Calidad y experiencia en cada instalación para proteger y mejorar tu infraestructura.",
}

export default function ProyectosPage() {
  return (
    <SiteShell tone="dark">
      <section className="page-hero page-hero--compact">
        <Blobs items={heroBlobs.proyectos} />
        <div className="page-hero__content">
          <Tag white>{proyectos.hero.tag}</Tag>
          <h1 className="h-hero">{proyectos.hero.title}</h1>
          <p className="lead">{proyectos.hero.text}</p>
        </div>
      </section>

      <div className="projects">
        {proyectos.featured.map((p, i) => (
          <section key={p.title} className={`project-row${i % 2 === 1 ? " project-row--reverse" : ""}`}>
            <Reveal className="project-row__media">
              <img src={p.image} alt={p.title} width={600} height={600} loading="lazy" />
            </Reveal>
            <Reveal className="project-row__text" delay={120}>
              <h2 className="project-title">{p.title}</h2>
              <p className="project-text">{p.text}</p>
            </Reveal>
          </section>
        ))}

        <div className="projects__grid">
          {proyectos.grid.map((p, i) => (
            <Reveal key={p.title} className="project-card" delay={i * 120}>
              <img src={p.image} alt={p.title} width={470} height={250} loading="lazy" />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </SiteShell>
  )
}
