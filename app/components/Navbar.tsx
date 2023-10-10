import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-[4%] shadow-sm py-3'>
      <Link href='/'>
        <Image
          src='/logo.png' 
          alt='website logo'
          width={80}
          height={80}
        />
      </Link>
      <div className='hidden  gap-5 capitalize font-normal text-gray-600 lg:flex hover:cursor-pointer'>
        <Link href='/'>home</Link>
        <h1>about</h1>
        <h1>services</h1>
        <h1>contact</h1>
      </div>
      <div></div>
    </nav>
  )
}

export default Navbar  