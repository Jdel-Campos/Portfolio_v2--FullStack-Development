import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const typography = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Jardel Campos' portfolio | Designer & Developer",
  description: 'Discover Jardel Campos portfolio, full of web development projects ranging from the creation of websites and web applications to the design of unique and engaging visual identities.',
  keywords: 'portfolio, web development, web projects, front end, design, ui design, visual identity, react, css, html, next.js, sass, tailwind, fullstack, front end, backend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={typography.className}>{children}</body>
    </html>
  )
}
