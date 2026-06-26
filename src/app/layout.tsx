import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Handy Hasan — Software Engineer, Melbourne',
  description: 'Full-stack software engineer in Melbourne. Currently building medical imaging systems at 4DMedical. Previously Who Gives A Crap and The Good Guys (JB Hi-Fi).',
  keywords: [
    'Handy Hasan',
    'software engineer Melbourne',
    'full-stack developer Melbourne',
    'React developer',
    'Python developer',
    '4DMedical engineer'
  ].join(', '),
  authors: [{ name: 'Handy Hasan' }],
  creator: 'Handy Hasan',
  publisher: 'Handy Hasan',
  robots: 'index, follow',
  openGraph: {
    title: 'Handy Hasan — Software Engineer, Melbourne',
    description: 'Full-stack engineer in Melbourne. Building medical imaging at 4DMedical; previously Who Gives A Crap and The Good Guys.',
    url: 'https://handyhasan.com',
    siteName: 'Handy Hasan',
    locale: 'en_AU',
    type: 'profile',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Handy Hasan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handy Hasan — Software Engineer, Melbourne',
    description: 'Full-stack engineer in Melbourne. Building medical imaging at 4DMedical.',
    images: ['/images/profile.jpg']
  },
  alternates: {
    canonical: 'https://handyhasan.com'
  },
  category: 'technology',
  classification: 'Software Engineering Portfolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Handy Hasan",
              "jobTitle": "Software Engineer",
              "description": "Full-stack software engineer with 7+ years experience in Melbourne, Australia",
              "url": "https://handyhasan.com",
              "image": "https://handyhasan.com/images/profile.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Melbourne",
                "addressRegion": "Victoria",
                "addressCountry": "Australia"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "4DMedical"
              },
              "knowsAbout": [
                "Software Engineering",
                "Full-Stack Development", 
                "React",
                "Python",
                "AWS",
                "Mobile Development",
                "Web Development",
                "Cloud Computing"
              ],
              "knowsLanguage": "en-AU"
            })
          }}
        />
        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content="Melbourne" />
        <meta name="geo.position" content="-37.8136;144.9631" />
        <meta name="ICBM" content="-37.8136, 144.9631" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
