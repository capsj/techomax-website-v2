import type { Metadata } from "next"
import SiteShell from "@/components/SiteShell"
import Tag from "@/components/Tag"
import { sobreNosotros } from "@/lib/content"

export const metadata: Metadata = {
  title: "Techo Max - Sobre Nosotros",
  description:
    "Conoce a TechoMax, líder en soluciones de impermeabilización. Con años de experiencia, ofrecemos servicios de alta calidad para negocios y hogares, garantizando protección duradera. Nuestro compromiso es tu tranquilidad. ¡Descubre más sobre nosotros!",
}

export default function SobreNosotrosPage() {
  const { hero, image } = sobreNosotros
  return (
    <SiteShell tone="solid" cta={false}>
      <section className="about">
        <div className="page-hero__content">
          <Tag>{hero.tag}</Tag>
          <h1 className="h-hero">{hero.title}</h1>
          <p className="lead">{hero.text}</p>
        </div>
      </section>
      <div className="about__image">
        <img src={image.src} alt={image.alt} width={1200} height={600} />
      </div>
    </SiteShell>
  )
}
