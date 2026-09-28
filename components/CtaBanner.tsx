import Link from "next/link"
import { cta } from "@/lib/content"
import Reveal from "./Reveal"

export default function CtaBanner() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta">
          <div className="cta__text">
            <h3 className="h-block cta__title">{cta.title}</h3>
            <p className="body cta__sub">{cta.text}</p>
          </div>
          <Link href={cta.button.href} className="btn btn--white">
            {cta.button.label}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
