'use client'

import Button from './Button'
import { useRouter } from 'next/navigation'

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter()

  function handleNavigation() {
    const newLimit = (pageNumber + 1) * 10

    // const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    // router.push(newPathname);
  }

  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {isNext && (
        <Button 
          btnType='button'
          title='Show More'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}  

export default ShowMore