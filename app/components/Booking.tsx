import Image, { StaticImageData } from 'next/image'

const Booking = ({ name, image, price }: { name: string, image: string | StaticImageData, price:string }) => {
  return (
    <div className='mt-7 grid lg:grid-cols-2 grid-cols-1 gap-3 lg:gap-4'>
      <div className='flex flex-col gap-3'>
        <div className='lg:h-[370px] grid place-items-center rounded-md bg-gray-50 p-2'>
          <Image 
            src={image}
            alt={name}
            width={400}
            height={400}
          />
        </div>
        <div className='flex gap-3 text-gray-700 md:text-lg text-sm font-semibold mt-1'>
          <p>4</p>
          <p>80L</p>
          <p>Automatic</p>
          <p>4WD</p>
        </div>
        <h1 className='text-sm font-bold'>
          MWK<span className='lg:text-2xl'>{price}</span>/day
        </h1>
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="name" className='capitalize text-gray-700 text-[14px] md:text-md'>full name:</label>
        <input 
          id='name' 
          type='text' 
          placeholder='full name' 
          className='border border-gray-500 outline-gray-500 p-1 md:p-2 rounded-md' 
        />

        <label htmlFor="email" className='capitalize text-gray-700 text-[14px] md:text-md'>email</label>
        <input 
          id='email' 
          type='email'
          placeholder='email'
          className='border border-gray-500 outline-gray-500 p-1 md:p-2 rounded-md' 
        />

        <label htmlFor="number"  className='capitalize text-gray-700 text-[14px] md:text-md'>phone number</label>
        <input 
          id='numer' 
          type='text' 
          placeholder='phone number' 
          className='border border-gray-500 outline-gray-500 p-1 md:p-2 rounded-md'
        />
                  
        <div className='flex gap-2 md:gap-4'>
          <div>
            <label htmlFor="duration"  className='capitalize text-gray-700 text-[14px] md:text-md'>pick-up date</label>
            <input 
              type='date' 
              placeholder='start date' 
              className='border border-gray-500 outline-gray-500 p-1 md:p-2 rounded-md w-full font-thin text-[14px]'
            />
          </div>
          <div>
            <label htmlFor="duration"  className='capitalize text-gray-700 text-[14px] md:text-md'>drop-off date</label>
            <input 
              type='date' 
              placeholder='end date' 
              className='border border-gray-500 outline-gray-500 p-1 md:p-2 rounded-md w-full font-thin text-[14px]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking    