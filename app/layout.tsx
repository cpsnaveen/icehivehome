import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const interTight = Inter_Tight({ subsets: ['latin'], variable: '--font-inter-tight', display: 'swap' })

export const metadata: Metadata = {
  title: 'Ice Hive Home — Smart Home Technology, Designed Around You',
  description:
    'Ice Hive Home designs and delivers intelligent home automation — lighting, climate, curtains, security, access, audio and networking integrated into one seamless experience.',
  generator: 'v0.app',
  openGraph: {
    title: 'Ice Hive Home — Smart Home Technology, Designed Around You',
    description:
      'Intelligent home automation — lighting, climate, curtains, security, access, audio and networking in one seamless experience.',
    siteName: 'Ice Hive Home',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ice Hive Home — Smart Home Technology, Designed Around You',
  },
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

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f6f9' },
    { media: '(prefers-color-scheme: dark)', color: '#0e1a4f' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} bg-navy-deep`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
