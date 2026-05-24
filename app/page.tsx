import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Speranza Rust Server',
  description: 'Speranza 10X PVE+ Rust Server — Legendary Weapons, Gold Scrap, Bosses, Raidable Bases, Legendary Armor.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
