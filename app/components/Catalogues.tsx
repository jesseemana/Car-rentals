import Card from './Card'
import Link from 'next/link'
import { StaticImageData } from 'next/image'
import Content from './Content'
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

          <div className='grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4'>
            {cars.map((car, index) => (
              <Card
                key={index} 
                tank={car.tank}
                name={car.name}
                type={car.type}
                image={car.image}
                seats={car.seats}
                price={car.price}
                transition={car.transition}
              />
            ))}
          </div>
        </div>
      </Content>
    </section>
  )
} 

export default Catalogues   

export interface Car {
  name: string
  tank: number
  type: string
  seats: number
  price: string
  image: string | StaticImageData,
  transition: string
}   