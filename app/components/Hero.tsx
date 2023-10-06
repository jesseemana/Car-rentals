'use client'

const Hero = () => {
  function handleScroll() {}

  return (
    <div className=' p-4 flex flex-col lg:flex-row gap-2'>
      <div className='flex-1 text-center lg:text-start'>
        <h1 className='text-[30px] md:text-[48px] font-bold capitalize lg:mt-[30px]'>
          effortless car rental <br /> with professionals
        </h1>
        <h2 className='text-[14px] lg:text-[20px] text-gray-500 font-light'>
          Seemless car booking with competitive pricing, <br/> 
          find and book your next ride with us today. <br/>
          It's very simple.
        </h2>
        <button 
          onClick={handleScroll}
          className='bg-primary-blue text-white rounded-xl mt-7 p-2 font-normal capitalize'
        >
          get started
        </button>
      </div>
      <div className='flex-[1.5] w-[90%] lg:w-full'>
        <img 
          src='/hero.png' 
          alt='a Toyota fortuner' 
          className='h-[200px] lg:h-[480px] md:h-[300px] lg:w-full'
        />
      </div>
    </div>
  )
}

export default Hero   