import Image, { StaticImageData } from 'next/image'
import { FaChair } from 'react-icons/fa'
import {  } from 'react-icons/cg'

interface CardProps {
  name: string
  type: string
  image: StaticImageData
  tank: number
  seats: number
  price: string
  transition: string
}

const Card = ({ name, type, image, price, seats, transition, tank }: CardProps) => {
  return (
    <div className='bg-gray-50 p-2 lg:p-5 rounded-md w-full flex flex-col gap-4 hover:cursor-pointer group'>
      <div>
        <p className='font-bold text-gray-800 text-xl capitalize'>{name}</p>
        <p className='font-normal text-gray-600 text-md capitalize'>{type}</p>
      </div>
      <div className='h-[100px] grid place-items-center hover:scale-120 transition-all'>
        <Image 
          src={image}
          alt={name}
          width={400}
          height={400}
        />
      </div>

      <div className='flex gap-4 text-gray-500 text-[10px] lg:text-sm font-normal'>
        <div className='flex items-center gap-1'>
          
          <p>{tank}L</p>
        </div>
        <div className='flex items-center gap-1'>
          
          <p className='capitalize'>{transition}</p>
        </div>
        <div className='flex items-center gap-1'>
          {/* <FaChair size={20} /> */}
          <p className='capitalize'>{seats}</p>
        </div>
      </div>
      <p className='font-bold text-gray-700'><span className='font-normal text-[12px]'>MWK</span>{price}/day</p>
      <button className='rounded-md bg-gray-900 p-1 text-white capitalize'>
        learn more
      </button>
    </div>
  )
}

export default Card     