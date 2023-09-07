import './globals.css'
import type { Metadata } from 'next'
import { Mitr } from 'next/font/google'

const mitr = Mitr({ 
  weight:['300','500'],
  subsets: ['latin']
  })

export const metadata: Metadata = {
  title: 'Github search user',
  description: 'Search a Github user easily.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body className={`${mitr.className} h-screen w-full bg-sky-100 dark:bg-[#070D19] grid place-content-center`}>{children}</body>
    </html>
  )
}
