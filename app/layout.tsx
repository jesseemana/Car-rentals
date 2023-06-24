import './globals.css'

export const metadata = {
  title: 'Whips r Us',
  description: "Discover world's best car showcase application",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        {children}
      </body>
    </html>
  )
}