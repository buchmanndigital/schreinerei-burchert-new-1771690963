import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Schreinerei Burchert | Meisterhandwerk im Allgäu',
  description: 'Individuelle Möbel, Innenausbau und Saunabau aus dem Allgäu. Wir verwirklichen Ihre Wohnträume mit Holz.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  )
}