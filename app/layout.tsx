import type { ReactNode } from "react"

export const metadata = { title: "quick-operator-625411.framer.app" }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
