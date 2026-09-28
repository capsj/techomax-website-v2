"use client"

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react"

type Props = {
  as?: ElementType
  className?: string
  delay?: number
  style?: CSSProperties
  children: ReactNode
}

/** Aparece con fade + slide al entrar en pantalla (como los "appear effects" de Framer). */
export default function Reveal({ as: Tag = "div", className = "", delay = 0, style, children }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible")
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}>
      {children}
    </Tag>
  )
}
