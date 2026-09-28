import type { ReactNode } from "react"
import CtaBanner from "./CtaBanner"
import Footer from "./Footer"
import Header from "./Header"
import ScrollTop from "./ScrollTop"

/** Estructura común de cada página: header, contenido, CTA final y footer. */
export default function SiteShell({ tone, children }: { tone?: "light" | "dark"; children: ReactNode }) {
  return (
    <>
      <Header tone={tone} />
      <main>{children}</main>
      <CtaBanner />
      <Footer />
      <ScrollTop />
    </>
  )
}
