import Image from 'next/image'

const About = () => {
  return (
    <section 
      id='about' 
      className='flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-20 border-t border-gray-100 py-7 max-w-full px-[4%]'
    >
      <div className='bg-gray-50 p-10 rounded-md'>
        <Image 
          src='/hero.png'
          alt='Toyota fortuner'
          width={500}
          height={500}
        />
      </div>

       <div className='flex flex-col gap-3 p-4'>
        <h1 className='capitalize text-lg md:text-3xl font-bold text-gray-900'>why you should chose us</h1>
        <p className='text-gray-600 text-md md:text-lg font-light'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Neque quae asperiores nisi itaque eius incidunt accusantium 
          reiciendis quaerat voluptatibus, debitis tenetur sapiente molestiae. 
          Odio sunt optio laborum quos delectus quo consectetur fugit vero illo nihil, 
          similique beatae, dolore, quidem itaque!
        </p>
      </div>
    </section>
  )
}

export default About    