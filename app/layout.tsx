import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Techsol',
  description: 'techsol',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
