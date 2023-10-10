import Image from 'next/image'
import { BiSupport } from 'react-icons/bi' 
import { GrServices } from 'react-icons/gr'
import { MdPriceCheck } from 'react-icons/md' 
import { BsFillCheckCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <section 
      id='about' 
      className='flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-20 border-t border-gray-100 py-7 max-w-full px-[4%]'
    >
      <div className='bg-gray-50 p-10'>
        <Image 
          src='/hero.png'
          alt='Toyota fortuner'
          width={500}
          height={500}
        />
      </div>

       <div className='flex flex-col gap-3 p-4'>
        <h1 className='capitalize text-lg md:text-3xl font-bold text-gray-900'>why you should chose us</h1>
        <div className='flex flex-col gap-4 ml-1'>
          {about.map((item, index) => (
            <div key={index} className='flex items-center gap-2'>
              {item.icon}
              <p className='capitalize text-gray-700 text-sm md:text-lg font-extralight'>{item.text}</p>
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
    icon: <BsFillCheckCircleFill size={20} />,
    text: 'easy booking expirience', 
  }, 
  {
    icon: <MdPriceCheck size={20} />,
    text: 'affordable prices'
  },
  {
    icon: <BiSupport size={20} />,
    text: 'excellent customer support'
  }, 
  {
    icon: <GrServices size={20} />,
    text: 'quality service'
  },
]     