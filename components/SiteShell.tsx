import type { ReactNode } from "react"
import CtaBanner from "./CtaBanner"
import Footer from "./Footer"
import Header, { type HeaderTone } from "./Header"
import ScrollTop from "./ScrollTop"

type Props = {
  tone?: HeaderTone
  /** muestra el banner "Pedí tu cotización" antes del footer */
  cta?: boolean
  children: ReactNode
}

/** Estructura común de cada página: header, contenido, CTA final y footer. */
export default function SiteShell({ tone, cta = true, children }: Props) {
  return (
    <>
      <Header tone={tone} />
      <main>{children}</main>
      {cta && <CtaBanner />}
      <Footer />
      <ScrollTop />
    </>
  )
}
