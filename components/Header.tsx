"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { nav } from "@/lib/content"

/**
 * "light": links grises sobre fondo claro (home)
 * "dark":  links blancos sobre el degradé violeta (servicios, proyectos)
 * "solid": fondo blanco translúcido y links azul oscuro (contacto, sobre nosotros)
 */
export type HeaderTone = "light" | "dark" | "solid"

type Props = {
  tone?: HeaderTone
}

export default function Header({ tone = "light" }: Props) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`header header--${tone}${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="header__inner">
        <Link href="/" className="header__logo" aria-label="TechoMax - Inicio">
          <img src="/images/logo-techomax.png" alt="TechoMax" width={150} height={21} />
        </Link>

        <nav className="header__nav" aria-label="Principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`header__link${pathname === item.href ? " is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
    </header>
  )
}
