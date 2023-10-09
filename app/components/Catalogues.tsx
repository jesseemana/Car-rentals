import { cars } from '@cars'
import Card from './Card'

const Catalogues = () => {
  return (
    <section id='catalogue' className='flex flex-col gap-3'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-lg lg:text-2xl capitalize font-bold'>featured cars</h1>
          <p className='text- text-gray-600 font-light'>
            Explore cars you might like
          </p>
        </div>
        <div className='group hover:cursor-pointer'>
          <h1 className='text-sm lg:text-lg font-normal capitalize'>view more</h1> 
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4'>
        {cars.map((car, index) => (
          <Card
            key={index} 
            tank={car.tank}
            name={car.name}
            image={car.image}
            price={car.price}
            type={car.type}
            seats={car.seats}
            transition={car.transition}
          />
        ))}
      </div>
    </section>
  )
} 

export default Catalogues   