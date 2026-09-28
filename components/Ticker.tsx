import type { CSSProperties, ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
  /** segundos que tarda en recorrer una vuelta completa */
  duration?: number
  gap?: number
}

/** Marquesina infinita: duplica el contenido y lo desplaza en loop con CSS. */
export default function Ticker({ children, className = "", duration, gap }: Props) {
  const style = {
    ...(duration ? { "--ticker-duration": `${duration}s` } : {}),
    ...(gap ? { "--ticker-gap": `${gap}px` } : {}),
  } as CSSProperties

  return (
    <div className={`ticker ${className}`} style={style}>
      <div className="ticker__track">
        <div className="ticker__group">{children}</div>
        <div className="ticker__group" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
