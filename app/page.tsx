'use client'
// CONVERT TO CLIENT COMPONENT TO AVOID SCROLLING TO TOP ON SEARCH SUBMISSION 

import { fetchCars } from '@utils'
import { useState, useEffect } from 'react'
import Hero from '@/app/components/Hero'
import CarCard from './components/CarCard'
import ShowMore from './components/ShowMore'
import SearchBar from '@/app/components/SearchBar'
import { fuels, yearsOfProduction } from './constants'
import CustomFilter from '@/app/components/CustomFilter'

export default async function Home({ searchParams }: HomeProps) {
  const [allCars, setAllCars] = useState([])
  const [fuel, setFuel] = useState('')
  const [model, setModel]= useState('')
  const [manufacturer, setManufacture] = useState('')
  const [limit, setLimit] = useState(10)
  const [year, setYear] = useState(2022)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getAllCars = async () => {
      setLoading(true)
      try {
        const result = await await fetchCars({
          fuel: fuel || '',
          model: model || '',
          year: year || 2022,
          limit: limit || 10,
          manufacturer: manufacturer || '',
        })

        setAllCars(result)
      } catch (error) {
        console.error(`AN ERROR OCCURED: ${error}`)
      } finally {
        setLoading(false)
      }
    }

    getAllCars()
  }, [model, fuel, manufacturer, limit, year, loading])

  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || '',
  //   year: searchParams.year || 2022,
  //   fuel: searchParams.fuel || '',
  //   limit: searchParams.limit || 10,
  //   model: searchParams.model || '',
  // })

  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars
  const isDataEmpty = allCars.length < 1 || !allCars

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-10 padding-x padding-y max-width' id='discover'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold capitalize'>car catalogue</h1>
          <p>explore the cars you might like</p>
        </div>

        <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
          <SearchBar />
          <div className='flex justify-start flex-wrap items-center gap-2'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
              {allCars?.map((car) => (
                // <CarCard car={car} />
                <></>
              ))}
            </div>

            <ShowMore
              pageNumber={(limit || 10) / 10}
              isNext={(limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='mt-16 flex justify-center items-center flex-col gap-2'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  )
}