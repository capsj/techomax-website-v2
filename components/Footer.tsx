import Link from "next/link"
import { contact, nav } from "@/lib/content"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" aria-label="TechoMax - Inicio">
              <img src="/images/logo-techomax-icon.png" alt="TechoMax" width={66} height={66} />
            </Link>
            <p className="body">Protección experta para tu negocio.</p>
          </div>

          <nav className="footer__links" aria-label="Pie de página">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="footer__contact">
            <h4>Contactanos</h4>
            <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
              Whatsapp {contact.whatsapp}
            </a>
            <a href={`mailto:${contact.email}`}>Email: {contact.email}</a>
            <a href={contact.mapsHref} target="_blank" rel="noopener noreferrer">
              Dirección: {contact.address}
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>Techo Max • Copyright © {new Date().getFullYear()}</p>
          <div className="footer__legal">
            {/* TODO: enlazar cuando existan estas páginas */}
            <span>Términos de Servicio</span>
            <span>Politicas de Privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
