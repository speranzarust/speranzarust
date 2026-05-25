import './globals.css'
import type { Metadata } from 'next'
import { Orbitron, Rajdhani } from 'next/font/google'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
})

export const metadata: Metadata = {
  title: 'Speranza Rust Server',
  description:
    'Speranza 10X PVE+ Rust Server — Legendary Weapons, Gold Scrap, Bosses, Raidable Bases, Legendary Armor.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${rajdhani.variable}`}
      >
        {children}
      </body>
    </html>
  )
}