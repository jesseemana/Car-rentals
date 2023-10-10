import './globals.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Rent A Car',
  description: "One of Malawi's leading car rentals",
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