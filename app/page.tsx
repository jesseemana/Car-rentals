import Hero from './components/Hero'
import About from './components/About'
import Catalogues from './components/Catalogues'
import Difference from './components/Difference'
import getCars from '../utils/getCars'

export default async function Home() {
  // const cars = await getCars()

  return (
    <>
      <Hero />
      <About />
      <Catalogues />
      <Difference />
    </>
  )
}   