import { Inter } from 'next/font/google'
import './globals.css'
import FooterComponent from './components/FooterComponent'
import NavBarComponent from './components/NavBarComponent'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Compress PDF - quick, online, free - PDF24 Tools',
  description: 'Free web app to compress PDFs online and reduce file size quickly and easily. No quality loss. Without installation. Without registration.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <NavBarComponent></NavBarComponent>
          {children}
          <FooterComponent></FooterComponent>
        </Providers>
      </body>
    </html>
  )
}
