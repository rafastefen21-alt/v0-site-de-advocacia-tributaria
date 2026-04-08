import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains',
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'SKP Assessoria Tributária | Inteligência Jurídica e Tecnologia',
  description: 'Escritório de advocacia tributária especializado em recuperação de créditos. Transformamos impostos pagos indevidamente em caixa para sua empresa.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
