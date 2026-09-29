import type { Metadata } from "next"
import Blobs from "@/components/Blobs"
import ContactForm from "@/components/ContactForm"
import SiteShell from "@/components/SiteShell"
import Tag from "@/components/Tag"
import { contacto } from "@/lib/content"

export const metadata: Metadata = {
  title: "Techo Max - Contacto",
  description:
    "Conéctate con TechoMax para obtener soluciones de impermeabilización de alta calidad. Nuestro equipo está listo para ayudarte con consultas y proyectos personalizados. ¡Contáctanos hoy y asegura la protección de tu techo!",
}

const px = (x: number) => `${((x / 1512) * 100).toFixed(2)}%`

export default function ContactoPage() {
  return (
    <SiteShell tone="solid" cta={false}>
      <section className="contact">
        <Blobs
          items={[
            { left: px(-127), top: -221, width: 536, height: 523, color: "#0073e6", blur: 76 },
            { left: px(340), top: -167, width: 345, height: 345, color: "#02d2ed", blur: 95 },
          ]}
        />
        <div className="page-hero__content">
          <Tag white>{contacto.hero.tag}</Tag>
          <h1 className="h-hero">{contacto.hero.title}</h1>
          <p className="lead">{contacto.hero.text}</p>
        </div>
        <ContactForm />
      </section>
    </SiteShell>
  )
}
