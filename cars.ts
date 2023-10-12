import cx3 from './public/car (1).png'
import jazz from './public/car (5).png'
import bmwx3 from './public/car (8).png'
import civic from './public/car (2).png'
import camry from './public/car (7).png'


const cars = [
  {
    name: "Mazda CX3",
    price: "30,000",
    image: cx3,
    type: "suv", 
    seats: 5,
    transition: "stick",
    tank: 80
  },
  {
    name: "honda jazz",
    price: "20,000",
    image: jazz,
    type: "hatchback", 
    seats: 8,
    transition: "auto",
    tank: 80
  },
  {
    name: "bmw x3",
    price: "30,000",
    image: bmwx3,
    type: "suv", 
    seats: 5,
    transition: "stick",
    tank: 90
  },
  {
    name: "honda civic",
    price: "15,000",
    image: civic,
    type: "sedan", 
    seats: 5,
    transition: "auto",
    tank: 70
  },
  {
    name: "toyota camry",
    price: "15,000",
    image: camry,
    type: "sedan", 
    seats: 5,
    transition: "stick",
    tank: 70
  },
]

export default cars 