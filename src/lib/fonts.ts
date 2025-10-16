import { Inter, Cormorant_Garamond, Sacramento } from 'next/font/google'

// Primary body font - Inter as alternative to Circular
export const circular = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-circular',
  display: 'swap',
})

// Display font - Cormorant Garamond as alternative to Freight Display Pro
export const freightDisplay = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-freight-display',
  display: 'swap',
})

// Script font - Sacramento as alternative to Amelaryas
export const amelaryas = Sacramento({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-amelaryas',
  display: 'swap',
})

// Export all fonts as className string for layout
export const fonts = `${circular.variable} ${freightDisplay.variable} ${amelaryas.variable}`