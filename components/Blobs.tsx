import type { CSSProperties } from "react"

export type Blob = {
  /** posición horizontal en % del ancho (diseñado sobre 1440px) */
  left: string
  top: number
  width: number
  height: number
  color: string
  blur: number
}

/** Manchas de color desenfocadas que forman el degradé de fondo de los heros. */
export default function Blobs({ items }: { items: Blob[] }) {
  return (
    <div className="blobs" aria-hidden>
      {items.map((b, i) => {
        const style: CSSProperties = {
          left: b.left,
          top: b.top,
          width: b.width,
          height: b.height,
          background: b.color,
          filter: `blur(${b.blur}px)`,
        }
        return <div key={i} className="blob" style={style} />
      })}
    </div>
  )
}

const px = (x: number) => `${((x / 1440) * 100).toFixed(2)}%`

export const heroBlobs: Record<"home" | "servicios" | "proyectos", Blob[]> = {
  home: [
    { left: px(837), top: -400, width: 838, height: 618, color: "#295bff", blur: 90 },
    { left: px(310), top: -369, width: 791, height: 514, color: "#2b7cff", blur: 82 },
    { left: px(-158), top: -281, width: 536, height: 523, color: "#ffc387", blur: 76 },
    { left: px(239), top: -277, width: 345, height: 345, color: "#ff8030", blur: 95 },
  ],
  servicios: [
    { left: px(885), top: -360, width: 838, height: 618, color: "#371ae7", blur: 90 },
    { left: px(358), top: -349, width: 791, height: 514, color: "#371ae7", blur: 82 },
    { left: px(210), top: -237, width: 345, height: 345, color: "#ed6402", blur: 95 },
  ],
  proyectos: [
    { left: px(885), top: -410, width: 838, height: 618, color: "#371ae7", blur: 90 },
    { left: px(408), top: -419, width: 791, height: 514, color: "#371ae7", blur: 82 },
  ],
}
