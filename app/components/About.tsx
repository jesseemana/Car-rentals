import Image from 'next/image'
import { BiSupport } from 'react-icons/bi' 
import { GrServices } from 'react-icons/gr'
import { MdPriceCheck } from 'react-icons/md' 
import { BsFillCheckCircleFill } from 'react-icons/bs'


const About = () => {
  return (
    <section id='about' className='flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10  lg:gap-20 border- border-gray-300 py-10'>
      <div className='bg-gray-50 p-10'>
        <Image 
          src='/hero.png'
          alt='Toyota fortuner'
          width={500}
          height={500}
          className=''
        />
      </div>

       <div className='flex flex-col gap-3 p-4'>
        <h1 className='capitalize text-lg md:text-3xl font-bold text-gray-900'>why you should chose us</h1>
        <div className='flex flex-col gap-2'>
          {about.map((item, index) => (
            <div key={index} className='flex items-center gap-2'>
              {item.icon}
              <p className='capitalize text-gray-900 text-sm md:text-lg font-extralight'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About    


export const about = [
  {
    icon: <BsFillCheckCircleFill />,
    text: 'easy booking expirience', 
  }, 
  {
    icon: <BiSupport />,
    text: 'excellent customer support'
  }, 
  {
    icon: <MdPriceCheck />,
    text: 'affordable prices'
  },
  {
    icon: <GrServices />,
    text: 'quality service'
  }
]     