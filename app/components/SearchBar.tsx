'use client'

import Image from 'next/image'
import SearchButton from './SearchButton'
import SearchManufacturer from './SearchManufacturer'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchBar = ({ setManufacturer, setModel }: any) => {
  const router = useRouter()
  const [searchModel, setSearchModel] = useState('')
  const [searchManufacturer, setSearchManuFacturer] = useState('')
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()

    if (searchManufacturer.trim() === '' && searchModel.trim() === '') return alert('Please provide some input')

    setModel(searchModel.toLowerCase())
    setManufacturer(searchManufacturer.toLowerCase())
  }


  // const updateSearchParams =  (model: string, manufacturer: string) => {
  //   const searchParams = new URLSearchParams(window.location.search)

  //   if (model) {
  //     searchParams.set('model', model)
  //   } else {
  //     searchParams.delete('model')
  //   }

  //   if (manufacturer) {
  //     searchParams.set('manufacturer', manufacturer)
  //   } else {
  //     searchParams.delete('manufacturer')
  //   }

  //   const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  //   router.push(newPathname)
  // }


  return (
    <form 
      className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl' 
      onSubmit={handleSearch}
    >
      <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
        <SearchManufacturer 
          selected={searchManufacturer}
          setSelected={setSearchManuFacturer}
          // manufacturer={searchManufacturer}
          // setManuFacturer={setSearchManuFacturer}
        />
        <SearchButton otherClasses='sm:hidden ' />
      </div>
      <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder='Tiguan...'
          className='w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>

      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  )
}

export default SearchBar