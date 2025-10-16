import type { Metadata } from 'next'
import { circular, freightDisplay, amelaryas } from '@/lib/fonts'
import { seoMetadata } from '@/data/content'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: seoMetadata.title,
  description: seoMetadata.description,
  keywords: seoMetadata.keywords,
  openGraph: {
    title: seoMetadata.title,
    description: seoMetadata.description,
    images: [
      {
        url: seoMetadata.ogImage,
        alt: seoMetadata.ogImageAlt,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: seoMetadata.twitterCard as 'summary_large_image',
    title: seoMetadata.title,
    description: seoMetadata.description,
    images: [seoMetadata.ogImage],
  },
  alternates: {
    canonical: seoMetadata.canonicalUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${circular.variable} ${freightDisplay.variable} ${amelaryas.variable}`}
    >
      <body className="scrollbar-custom">
        {children}
      </body>
    </html>
  )
}
