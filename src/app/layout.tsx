import './globals.css'
import type { Metadata } from 'next'
import clsx from 'clsx'
import { Nunito, Nunito_Sans } from 'next/font/google'
import { createClient, repositoryName } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle('settings');

  return {
    title: settings.data.site_title || 'North Kitsap Soccer Club',
    description: settings.data.meta_description || 'NKSC is the longest-standing soccer club in North Kitsap.',
    openGraph: {
      images: [settings.data.og_image.url || ''],
    },
  }
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const client = createClient();

  const settings = await client.getSingle('settings');

  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body>
        <Header settings={settings} />
          {children}
        <Footer settings={settings} />
        <div className='fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-50' />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}