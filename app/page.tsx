import Image from 'next/image'
import Hero from './components/Hero'

export default async function Home({ searchParams }: HomeProps) {
  return (
    <main className='overflow-hidden'>
      <Hero />
    </main>
  )
}