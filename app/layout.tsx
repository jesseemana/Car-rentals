import './globals.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Content from './components/Content'

export const metadata = {
  title: 'Mobile Mobility',
  description: "One of Malawi's leading car rentals",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar />
          <Content>
            {children}
          </Content>
        <Footer />
      </body>
    </html>
  )
} 