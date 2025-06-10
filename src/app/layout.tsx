import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Handy Hasan - Senior Software Engineer Melbourne | Full-Stack Developer',
  description: 'Senior Software Engineer in Melbourne with 7+ years experience. Expert in React, Python, AWS, and mobile development. Available for hire by top Melbourne tech companies.',
  keywords: [
    'software engineer Melbourne',
    'senior developer Melbourne',
    'full-stack developer Melbourne', 
    'React developer Melbourne',
    'Python developer Melbourne',
    'mobile app developer Melbourne',
    'AWS cloud engineer Melbourne',
    'hire software engineer Melbourne',
    'top developer Melbourne',
    'freelance developer Melbourne',
    'contract developer Melbourne',
    'Handy Hasan developer',
    'Melbourne tech talent',
    'software engineer for hire'
  ].join(', '),
  authors: [{ name: 'Handy Hasan' }],
  creator: 'Handy Hasan',
  publisher: 'Handy Hasan',
  robots: 'index, follow',
  openGraph: {
    title: 'Handy Hasan - Senior Software Engineer Melbourne',
    description: 'Senior Full-Stack Software Engineer in Melbourne. 7+ years experience with React, Python, AWS. Available for hire.',
    url: 'https://handyhasan.com',
    siteName: 'Handy Hasan Portfolio',
    locale: 'en_AU',
    type: 'profile',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Handy Hasan - Senior Software Engineer Melbourne'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handy Hasan - Senior Software Engineer Melbourne',
    description: 'Senior Full-Stack Developer in Melbourne. Expert in React, Python, AWS. Available for hire.',
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
              "jobTitle": "Senior Software Engineer",
              "description": "Senior Full-Stack Software Engineer with 7+ years experience in Melbourne, Australia",
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
              "alumniOf": {
                "@type": "Organization",
                "name": "University"
              },
              "award": [
                "10,000+ app users for Hangtime Melbourne",
                "Medical imaging platform processing 3,290+ daily scans"
              ]
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
