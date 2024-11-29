import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Odi Filipe Barros Brisola - Portfolio",
  description: "Full Stack Developer Portfolio showcasing my projects and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
