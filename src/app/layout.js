import '@styles/globals.css'
import Head from './head'

export const metadata = {
  title: 'RobertCoder',
  description: 'By RobertCoder',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <Head />
      </head>
      <body>{children}</body>
    </html>
  )
}
