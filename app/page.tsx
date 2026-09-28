import type React from "react"
import Link from "next/link"
import CtaBanner from "@/components/CtaBanner"
import Blobs, { heroBlobs } from "@/components/Blobs"
import Reveal from "@/components/Reveal"
import ServiceRow from "@/components/ServiceRow"
import SiteShell from "@/components/SiteShell"
import Tag from "@/components/Tag"
import Ticker from "@/components/Ticker"
import { home } from "@/lib/content"

export default function HomePage() {
  const { hero, logos, intro, service, features, metrics, testimonials } = home

  return (
    <SiteShell tone="light">
      {/* Hero */}
      <section className="hero">
        <Blobs items={heroBlobs.home} />
        <div className="hero__content">
          <h1 className="h-hero hero__title">{hero.title}</h1>
          <p className="lead hero__text">{hero.text}</p>
          <div className="hero__actions">
            <Link href={hero.secondary.href} className="btn btn--outline">
              {hero.secondary.label}
            </Link>
            <Link href={hero.primary.href} className="btn btn--primary">
              {hero.primary.label}
            </Link>
          </div>
        </div>
        <Ticker className="hero__ticker" duration={45}>
          {hero.ticker.map((card) => (
            <img
              key={card.src}
              src={card.src}
              alt={card.alt}
              width={card.w}
              height={card.h}
              className="hero__card"
              style={{ "--w": `${card.w}px`, "--h": `${card.h}px` } as React.CSSProperties}
            />
          ))}
        </Ticker>
      </section>

      {/* Logos de clientes */}
      <section className="logos">
        <p className="logos__title">{logos.title}</p>
        <Ticker className="logos__ticker">
          {logos.items.map((logo) => (
            <img key={logo.src} src={logo.src} alt="" width={logo.w} height={logo.h} />
          ))}
        </Ticker>
      </section>

      {/* Cómo funciona */}
      <section className="section section--intro">
        <Reveal className="container section-head">
          <Tag>{intro.tag}</Tag>
          <h2 className="h-section">{intro.title}</h2>
          <p className="body">{intro.text}</p>
        </Reveal>
      </section>

      {/* Servicio destacado */}
      <ServiceRow {...service} />

      {/* Por qué nosotros */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <Tag>{features.tag}</Tag>
            <h2 className="h-section">{features.title}</h2>
            <p className="body">{features.text}</p>
          </Reveal>
          <div className="features__grid">
            {features.items.map((item, i) => (
              <Reveal key={item.title} className="feature" delay={(i % 3) * 100}>
                <div className="feature__icon" aria-hidden />
                <h4 className="feature__title">{item.title}</h4>
                <p className="feature__text">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA intermedio (el final lo agrega SiteShell) */}
      <CtaBanner />

      {/* Métricas */}
      <section className="section metrics">
        <div className="container">
          <Reveal className="section-head">
            <Tag>{metrics.tag}</Tag>
            <h5 className="metrics__title">{metrics.title}</h5>
          </Reveal>
          <div className="metrics__grid">
            {metrics.items.map((m, i) => (
              <Reveal key={m.label} className="metric" delay={i * 100}>
                <p className="metric__value">{m.value}</p>
                <p className="metric__label">{m.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section testimonials">
        <Reveal className="container section-head">
          <Tag white>{testimonials.tag}</Tag>
          <h2 className="h-section">{testimonials.title}</h2>
        </Reveal>
        <div className="testimonials__grid">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.author} className="testimonial" delay={i * 120} style={{ background: t.color }}>
              <blockquote className="testimonial__quote" style={{ margin: 0 }}>
                &quot;{t.quote}&quot;
              </blockquote>
              <div className="testimonial__author">
                <img src={t.avatar} alt="" width={64} height={64} loading="lazy" />
                <span>{t.author}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
