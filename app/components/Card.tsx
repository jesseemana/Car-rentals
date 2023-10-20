'use client'

import Image from 'next/image'
import Booking from './Booking'
import { Car } from './Catalogues'
import { CgClose } from 'react-icons/cg'
import * as Dialog from '@radix-ui/react-dialog'


const Card = ({ name, type, image, price, seats, transition, tank }: Car) => {
  return (
    <div className='bg-gray-50 p-2 lg:p-5 rounded-md w-full flex flex-col gap-4 group'>
      <div className='flex flex-col'>
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
          {/* TANK ICON */}
          <p>{tank}L</p>
        </div>
        <div className='flex items-center gap-1'>
          {/* TRANISTION/GEAR ICON */}
          <p className='capitalize'>{transition}</p>
        </div>
        <div className='flex items-center gap-1'>
          {/* SEATS ICON */}
          <p className='capitalize'>{seats}</p>
        </div>
      </div>

      <p className='font-bold text-gray-700'>
        <span className='font-normal text-[12px]'>MWK</span>
        {price}/day
      </p>

      <Dialog.Root>
        <Dialog.Trigger className='rounded-md bg-gray-900 p-1 text-white capitalize hover:cursor-pointer'>
          learn more
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='fixed inset-0 bg-black/50' />
          <Dialog.Content className='w-full max-w-sm md:max-w-md lg:max-w-4xl fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md p-8 bg-white text-gray-900 shadow'>
            <div className='flex items-center justify-between'>
              <Dialog.Title className='text-xl capitalize'>book car</Dialog.Title>
              <Dialog.Close>
                <CgClose className='text-gray-700 hover:text-gray-400 hover:cursor-pointer' />
              </Dialog.Close>
            </div>

            <Booking 
              name={name} 
              image={image} 
              price={price} 
            /> 
              
            <div className='mt-8 text-right space-x-6'>
              <Dialog.Close className='rounded border border-gray-700 text-gray-400 font-medium px-4 py-2 text-sm hover:text-gray-700'>
                cancel
              </Dialog.Close>
              <button className='rounded text-white bg-gray-700 font-medium px-4 py-2 text-sm hover:bg-gray-900'>
                book car
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default Card      