import Link from "next/link"
import Reveal from "./Reveal"
import Tag from "./Tag"

type Props = {
  tag: string
  title: string
  text: string
  button: { label: string; href: string }
  image: { src: string; alt: string }
  /** imagen a la izquierda y texto a la derecha */
  reverse?: boolean
  titleAs?: "h2" | "h3"
}

export default function ServiceRow({ tag, title, text, button, image, reverse = false, titleAs: Title = "h3" }: Props) {
  return (
    <section className="section">
      <div className="container">
        <div className={`split${reverse ? " split--reverse" : ""}`}>
          <Reveal className="split__text">
            <Tag>{tag}</Tag>
            <Title className="h-block">{title}</Title>
            <p className="body">{text}</p>
            <Link href={button.href} className="btn btn--outline-violet">
              {button.label}
            </Link>
          </Reveal>
          <Reveal className="split__media" delay={120}>
            <img src={image.src} alt={image.alt} width={520} height={360} loading="lazy" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
