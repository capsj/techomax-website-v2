import type { Metadata } from "next"
import type { ReactNode } from "react"
import localFont from "next/font/local"
import "./globals.css"

// Fuentes self-hosted (subset latin), sin depender de Google Fonts en build.
const poppins = localFont({
  src: [{ path: "./fonts/poppins-500.woff2", weight: "500", style: "normal" }],
  variable: "--font-display",
  display: "swap",
})

const beVietnam = localFont({
  src: [
    { path: "./fonts/be-vietnam-pro-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/be-vietnam-pro-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/be-vietnam-pro-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/be-vietnam-pro-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
})

const inter = localFont({
  src: [
    { path: "./fonts/inter-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/inter-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  // Definí NEXT_PUBLIC_SITE_URL con el dominio final para que la imagen OG use URL absoluta
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: "Techo Max - Impermeabilización Experta",
  description:
    "Protege tu negocio o hogar con nuestras soluciones de impermeabilización de alta calidad. Ofrecemos instalación de membranas asfálticas, techos verdes y sistemas solares. Confía en nuestros expertos para mantener tus techos secos, seguros y eficientes.",
  icons: { icon: "/favicon.png" },
  openGraph: { images: ["/images/og.jpg"], locale: "es_AR", type: "website" },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-AR" className={`${poppins.variable} ${beVietnam.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
