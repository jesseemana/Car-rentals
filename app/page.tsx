import Image from 'next/image'
import Hero from '@/app/components/Hero'
import SearchBar from '@/app/components/SearchBar'
import CustomFilter from '@/app/components/CustomFilter'

export default async function Home({ searchParams }: HomeProps) {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold capitalize'>car catalogue</h1>
          <p>explore the cars yoou might like</p>
        </div>

        <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
          <SearchBar />

          <div className='flex justify-start flex-wrap items-center gap-2'>
            <CustomFilter title='fuel' options={[]} />
            <CustomFilter title='year' options={[]} />
          </div>
        </div>
      </div>
    </main>
  )
}