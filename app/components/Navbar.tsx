import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-[4%] shadow-sm py-3'>
      <Image
        src='/logo.png' 
        alt='website logo'
        width={80}
        height={80}
      />
      <div className='hidden flex gap-5 capitalize font-normal text-gray-600 lg:flex hover:cursor-pointer'>
        <h1>home</h1>
        <h1>about</h1>
        <h1>services</h1>
        <h1>contact</h1>
      </div>
      <div></div>
    </nav>
  )
}

export default Navbar  