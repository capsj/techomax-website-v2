"use client"

import { useState, type FormEvent } from "react"
import { contact, contacto } from "@/lib/content"

type Status = "idle" | "sending" | "sent" | "error"

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const t = contacto.form

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      // Sin servicio de email configurado: abrimos el cliente de correo con el mensaje armado.
      if (res.status === 501) {
        const subject = encodeURIComponent(`Consulta web - ${data.name || ""}`)
        const body = encodeURIComponent(`${data.message}\n\n${data.name} <${data.email}>`)
        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
        setStatus("idle")
        return
      }

      if (!res.ok) throw new Error(await res.text())
      form.reset()
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <input type="text" name="name" placeholder={t.name} aria-label={t.name} autoComplete="name" />
      <input type="email" name="email" placeholder={t.email} aria-label={t.email} autoComplete="email" required />
      <textarea name="message" placeholder={t.message} aria-label={t.message} required />
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? t.sending : t.submit}
      </button>
      {status === "sent" && <p className="contact-form__status">{t.success}</p>}
      {status === "error" && <p className="contact-form__status is-error">{t.error}</p>}
    </form>
  )
}
