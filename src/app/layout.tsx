import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/Nav'
const inter = Inter({ subsets: ['latin'] })
import Footer from './components/footer'

export const metadata: Metadata = {
  title: 'Portfolio ',
  description: 'A portfolio website created for Muhammad Usman and also serves as a blog.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`h-screen pt-[5rem] ${inter.className}`}>
      <NavBar/>
        {children}
        <Footer />
        </body>
    </html>
  )
}
