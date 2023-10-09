import { ImLocation2 } from 'react-icons/im'
import { BsShieldFillCheck, BsFillBookmarksFill } from 'react-icons/bs'

const Difference = () => {
  return (
    <section className='flex p-10 flex-col gap-10 mt-10'>
      <div className='flex flex-col text-center'>
        <h1 className='text-lg lg:text-2xl text-gray-950 capitalize font-bold'>why we are different</h1>
        <p className='font-light text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Sed fuga sequi officiis alias sit accusamus. <br />
        </p>
      </div>

      <div className='flex flex-col gap-5 lg:flex-row justify-around items-center '>
        {diff.map((item, index) => (
          <div 
            key={index} 
            className='flex flex-col gap-2 items-center justify-center shadow-lg w-[230px] lg:w-[255px] p-7 rounded-md bg-slate-5'
          >
            {item.icon}
            <h2 className='capitalize text-center font-semibold'>{item.title}</h2>
            <p className='text-center text-gray-600'>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Difference   


export const diff = [
  {
    icon: <BsFillBookmarksFill size={40} />,
    title: 'easy booking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, officiis?'
  },
  {
    icon: <BsShieldFillCheck size={40} />,
    title: 'secure payments',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, officiis?'
  },
  {
    icon: <ImLocation2 size={40} />,
    title: '24/7 tracking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, officiis?'
  },
]    