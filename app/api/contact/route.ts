import { NextResponse } from "next/server"

/**
 * Recibe el formulario de /contacto y lo envía por email con Resend (https://resend.com).
 *
 * Variables de entorno:
 *   RESEND_API_KEY   API key de Resend (sin esta, el formulario abre el mail del usuario)
 *   CONTACT_TO       destinatario (default: techomaxargentina@gmail.com)
 *   CONTACT_FROM     remitente verificado en Resend (default: onboarding@resend.dev)
 */
export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: "Email no configurado" }, { status: 501 })
  }

  let body: { name?: string; email?: string; message?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 })
  }

  const name = String(body.name ?? "").trim().slice(0, 200)
  const email = String(body.email ?? "").trim().slice(0, 200)
  const message = String(body.message ?? "").trim().slice(0, 5000)

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
    return NextResponse.json({ error: "Faltan datos" }, { status: 400 })
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "TechoMax Web <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO ?? "techomaxargentina@gmail.com"],
      reply_to: email,
      subject: `Consulta web - ${name || email}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: "No se pudo enviar" }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
