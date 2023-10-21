import Card from './Card'
import { Car } from './Catalogues'


const Cars = ({ cars }: { cars: Car[] }) => {
  return (
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
  )
}

export default Cars   