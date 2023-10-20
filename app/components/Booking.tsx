import Image, { StaticImageData } from 'next/image'

const Booking = ({ name, image, price }: { name: string, image: string | StaticImageData, price:string }) => {
  return (
    <div className='mt-7 grid lg:grid-cols-2 grid-cols-1 gap-3 lg:gap-4'>
      <div className='flex flex-col gap-3'>
        <div className='bg-gray-50 lg:h-[370px] p-2 grid place-items-center rounded-md'>
          <Image 
            src={image}
            alt={name}
            width={700}
            height={700}
          />
        </div>
        <div className='flex gap-3 text-gray-700 md:text-lg text-sm font-semibold'>
          <p>4</p>
          <p>80L</p>
          <p>Automatic</p>
          <p>4WD</p>
        </div>
        <h1 className='text-sm font-bold'>
          MWK<span className='lg:text-2xl '>{price}</span>/day
        </h1>
      </div>

      <div className='flex flex-col gap-2 lg:gap-4'>
        <label htmlFor="location" className='capitalize text-gray-700 text-sm md:text-lg'>pick up location:</label>
        <input 
          id='location' 
          type='text' 
          placeholder='pick up location' 
          className='border border-gray-500 outline-gray-500 p-1 md:p-2 rounded-md' 
        />

        <label htmlFor="email" className='capitalize text-gray-700 text-sm md:text-lg'>email</label>
        <input 
          id='email' 
          type='email'
          placeholder='email'
          className='border border-gray-500 outline-gray-500 p-1 md:p-2 rounded-md' 
        />

        <label htmlFor="number"  className='capitalize text-gray-700 text-sm md:text-lg'>phone number</label>
        <input 
          id='numer' 
          type='text' 
          placeholder='phone number' 
          className='border border-gray-500 outline-gray-500 p-1 md:p-2 rounded-md'
        />
                  
        <div className='flex gap-2 md:gap-4'>
          <div>
            <label htmlFor="duration"  className='capitalize text-gray-700 text-sm md:text-lg'>start date</label>
            <input 
              type='date' 
              placeholder='start date' 
              className='border border-gray-500 outline-gray-500 p-1 md:p-2 rounded-md w-full font-thin text-sm'
            />
          </div>
          <div>
            <label htmlFor="duration"  className='capitalize text-gray-700 text-sm md:text-lg'>end date</label>
            <input 
              type='date' 
              placeholder='end date' 
              className='border border-gray-500 outline-gray-500 p-1 md:p-2 rounded-md w-full font-thin text-sm'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking    