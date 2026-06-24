import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://neerajram.in'),

  title: {
    default:
      'Neeraj Ram | EV Product Manager | SaaS, Charging Infrastructure & Product Strategy',
    template: '%s | Neeraj Ram',
  },

  description:
    'Bengaluru-based EV Product Manager specializing in EV charging infrastructure, SaaS platforms, OCPP, dynamic pricing, OTA management, and 0→1 product development.',

  keywords: [
    'Neeraj Ram',
    'EV Product Manager',
    'Product Manager Bengaluru',
    'EV Product Manager Bengaluru',
    'Product Manager India',
    'EV Product Manager India',
    'EV Charging Infrastructure',
    'Charging Station Management System',
    'CSMS',
    'OCPP',
    'OCPP 1.6J',
    'OCPP 2.0.1',
    'OCPI',
    'EV SaaS',
    'Dynamic Pricing',
    'OTA Management',
    'Product Strategy',
    'Product Management',
    'EV Industry',
    'Energy Management Platform',
  ],

  authors: [
    {
      name: 'Neeraj Ram',
      url: 'https://neerajram.in',
    },
  ],

  creator: 'Neeraj Ram',

  openGraph: {
    title:
      'Neeraj Ram | EV Product Manager | SaaS, Charging Infrastructure & Product Strategy',

    description:
      'Built EV Charging & Energy Platforms from 0→1. Explore product case studies including ENERGIC, Dynamic Pricing, OTA Firmware Management, and AI-Assisted Trip Planning.',

    url: 'https://neerajram.in',

    siteName: 'Neeraj Ram Portfolio',

    locale: 'en_US',

    type: 'website',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Neeraj Ram - EV Product Manager',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Neeraj Ram | EV Product Manager',

    description:
      'Building EV Charging & Energy Platforms from 0→1',

    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
  
}
export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050506',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Neeraj Ram',
      url: 'https://neerajram.in',
      jobTitle: 'Product Manager',
      description:
        'EV Product Manager specializing in charging infrastructure, SaaS platforms, and 0→1 product development.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressCountry: 'India',
      },
      sameAs: [
        'https://www.linkedin.com/in/neerajram17/',
      ],
    }),
  }}
/>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
