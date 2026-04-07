import type { Metadata, Viewport } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: 'Loc Nguyen - Fitness Blog',
  description: 'Training guides, nutrition advice, and honest fitness content. Join 45K+ followers on the journey.',
  icons: {
    icon: '/logo-ln.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5c542',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
