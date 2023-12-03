import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Découvrez Galet',
  description: 'Affichage dynamique sur écran e-ink',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='lg:container'>{children}</body>
    </html>
  )
}
