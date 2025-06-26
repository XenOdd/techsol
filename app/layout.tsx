import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Techsol',
  description: 'Techsol - Leading supplier of military-grade frequency and radio modules for defense applications worldwide.',
  generator: 'YexTech',
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
