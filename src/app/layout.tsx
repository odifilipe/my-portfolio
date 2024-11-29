import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
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
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
          <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="#" className="text-xl font-bold">Your Name</a>
            <ul className="hidden md:flex items-center gap-8">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#projects" className="hover:text-primary">Projects</a></li>
              <li><a href="#skills" className="hover:text-primary">Skills</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
