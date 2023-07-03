'use client'

import Image from 'next/image'
import { Fragment, useState } from 'react'
import { Transition, Combobox } from '@headlessui/react'
import { manufacturers } from '@app/constants'

const SearchManufacturer = ({ selected, setSelected }: SearchManuFacturerProps) => {
  const [query, setQuery] = useState('')

  const filteredManufactures = query === '' ? manufacturers : manufacturers.filter((item) => {
    return item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
  })

  return (
    <div className='flex-1 max-sm:w-full flex justify-start items-center'>
      <Combobox value={selected} onChange={setSelected} >
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image 
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='car logo'
            />
          </Combobox.Button>

          <Combobox.Input 
            placeholder='Volkswagen...'
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
            className='w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm'
          />

          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options
              className='absolute mt-1 max-h-60 w-full overflow-auto z-10 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
              {/* IF FITERED VALUE AND QUERY ARE NOT THERE */}
              {filteredManufactures.map(item => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`
                    }
                  >
                    {({selected, active}) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}> {item} </span>

                        {/* SHOW AN ACTIVE BLUE BACKGROUND IF THE OPTION IS SELECTED*/}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? 'text-white': 'text-pribg-primary-purple'}`}></span>
                        ) : null }
                      </>
                    )}
                  </Combobox.Option>
                ))
              }
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer