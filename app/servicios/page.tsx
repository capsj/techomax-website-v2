import type { Metadata } from "next"
import Blobs, { heroBlobs } from "@/components/Blobs"
import ServiceRow from "@/components/ServiceRow"
import SiteShell from "@/components/SiteShell"
import { servicios } from "@/lib/content"

export const metadata: Metadata = {
  title: "Techo Max - Servicios",
  description:
    "Descubre los servicios de TechoMax: impermeabilización con membranas asfálticas, techos verdes y sistemas solares. Protegemos tu negocio o hogar con soluciones duraderas y eficientes. Calidad, profesionalismo y sostenibilidad en cada proyecto.",
}

export default function ServiciosPage() {
  return (
    <SiteShell tone="dark">
      <section className="page-hero">
        <Blobs items={heroBlobs.servicios} />
        <div className="page-hero__content">
          <h1 className="h-hero">{servicios.hero.title}</h1>
          <p className="lead">{servicios.hero.text}</p>
        </div>
      </section>

      {servicios.items.map((item, i) => (
        <ServiceRow key={item.title} {...item} button={servicios.button} reverse={i % 2 === 1} />
      ))}
    </SiteShell>
  )
}
