import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Cinzel } from "next/font/google"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
})

export const metadata: Metadata = {
  title: "Masianello - Auténtica Pizzería Napolitana en Barcelona",
  description:
    "Restaurante Masianello en Barcelona. Auténtica cocina napolitana honrando la tradición de Tommaso Aniello.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-cinzel: ${cinzel.variable};
}
        `}</style>
      </head>
      <body className={`${GeistSans.className} ${cinzel.variable}`}>{children}</body>
    </html>
  )
}
