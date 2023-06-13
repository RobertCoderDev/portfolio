import '@styles/globals.css'
import Head from './head'

export const metadata = {
  title: 'robertvdev',
  description: 'By robertvdev',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Head />
      </head>
      <body>{children}</body>
    </html>
  )
}
