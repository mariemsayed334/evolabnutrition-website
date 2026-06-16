import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});
const lato = Lato({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'evolabnutrition',
  description: 'Discover premium supplements for optimal health and fitness performance',
  generator: 'v0.app',
  icons: {
    icon: '/images/evo.png',
    apple: '/images/evo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${playfairDisplay.variable} ${lato.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
