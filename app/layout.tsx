import Footer from './components/Footer'
import Navbar from './components/Navbar'

import './globals.css'

export const metadata = {
  title: 'Whips r Us',
  description: "Discover world's best car showcase application",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}