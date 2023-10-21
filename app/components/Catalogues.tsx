import Cars from './Cars'
import Link from 'next/link'
import Content from './Content'
import { StaticImageData } from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

import cars from '@cars'

const Catalogues = () => {
  return (
    <section id='catalogue' className='border-t border-gray-100 py-4'>
      <Content>
        <div className='flex flex-col gap-3'>
          <div className='flex justify-between'>
            <div>
              <h1 className='text-lg lg:text-2xl capitalize font-bold'>featured cars</h1>
              <p className='text- text-gray-600 font-light'>Explore cars you might like</p>
            </div>
            <Link href='/cars' className='group flex items-center gap-2'>
              <h1 className='text-sm lg:text-lg font-normal capitalize'>view more</h1> 
              <FaArrowRight />
            </Link>
          </div>  
          <Cars cars={cars} />
        </div>
      </Content>
    </section>
  )
} 

export default Catalogues   


export type Car = {
  name: string
  tank: number
  type: string
  seats: number
  price: string
  transition: string
  image: string | StaticImageData,
}   