import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Keto Etefa Gemechu - Software Developer & AI Enthusiast',
  description: 'Computer Science student at Pomona College specializing in machine learning, neural networks, and software engineering. Experienced in Python, Java, React, and cloud technologies.',
  keywords: 'Keto Etefa Gemechu, Software Developer, Computer Science, Machine Learning, AI, Python, Java, React, Pomona College',
  author: 'Keto Etefa Gemechu',
  openGraph: {
    title: 'Keto Etefa Gemechu - Software Developer & AI Enthusiast',
    description: 'Computer Science student at Pomona College specializing in machine learning and software engineering.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}