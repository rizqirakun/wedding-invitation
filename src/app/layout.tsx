import './globals.css'
import { Cookie } from 'next/font/google'
import localFont from 'next/font/local'

const fontCookie = Cookie({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cookie',
})

// Font files can be colocated inside of `pages`
const fontCreamCandy = localFont({
  src: './fonts/cream-candy.otf',
  display: 'swap',
  variable: '--font-cream-candy',
})

const fontJuicebox = localFont({
  src: './fonts/juicebox.woff',
  display: 'swap',
  variable: '--font-juicebox',
})

export const metadata = {
  title: 'Retno & Rizqi Wedding Invitation',
  description: 'Retno & Rizqi Wedding Invitation | Menjadi suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir untuk memberikan doa dan restu serta menjadi bagian cerita dalam pernikahan kami.',
  icons: {
    icon: "/img/wedding-favicon.png",
    type: "image/png",
  },
  shortcut: {
    url: "/img/wedding-favicon.png",
    type: "image/png"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={ `${fontCookie.variable} ${fontJuicebox.variable} ${fontCreamCandy.variable}` }>
      <body className="font-juicebox">{children}</body>
    </html>
  )
}
