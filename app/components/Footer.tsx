import Link from 'next/link'
import Image from 'next/image'
import { footer_links } from '@app/utils/links'
import { ImLocation2 } from 'react-icons/im'
import { FaFacebook, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image 
            src='/logo.png' 
            alt='logo' 
            width={118} 
            height={18} 
            className='object-contain' 
          />
          <p className='text-base text-gray-600'>
            Rent A Car 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className='flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-10'>
          {footer_links.map((item, index) => (
            <div key={index} className='flex flex-col gap-6 text-base min-w-[170px]'>
              <h3 className='font-bold'>{item.title}</h3>
              <div className='flex flex-col gap-3'>
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className='text-gray-700'
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className='flex flex-col gap-4 text-base min-w-[170px] text-gray-700'>
            <h3 className='font-bold capitalize'>contact</h3>
            {/* PHONE */}
            <div className='flex gap-2'>
              <FaPhone className='text-gray-900 mt-1' />
              <p>+265 88 123 4567 <br/> +265 99 123 4567</p>
            </div>
            {/* LOCATION */}
            <div className='flex gap-2'>
              <ImLocation2 className='text-gray-900 mt-2' />
              <p>Somewhere probably, <br/> Some place too, <br/>Some location.</p> 
            </div>
            {/* SOCIAL MEDIA */}
            <div className='flex gap-4'>
              {socials.map((item, index) => (
                <Link key={index} href={item.link} target='_blank'>
                  {item.icon}
                </Link>
              ))}
            </div>
            {/* WORK HOURS */}
            <p className='font-semibold text-gray-900 capitalize'>
              work hours: <span className='font-normal ml-2'>Mon - Sat <br/> 
              08:00am - 17:00pm</span>
            </p>
          </div>
        </div>
      </div>  

      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p>@2023 Rent A Car. All rights reserved</p>
        <div className='flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10'>
          <Link href='/' className='text-gray-500'>
            Privacy & Policy
          </Link>
          <Link href='/' className='text-gray-500'>
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer   

export const socials = [
  { 
    icon: <FaTwitter className='text-gray-900' />,
    link: 'x.com/jesseemaana'
  },
  { 
    icon: <FaFacebook className='text-gray-900' />,
    link: 'facebook.com'
  },
  { 
    icon: <FaInstagram className='text-gray-900' />,
    link: 'insatgram.com'
  }
]   