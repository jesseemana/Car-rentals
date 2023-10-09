import Hero from './components/Hero'
import Catalogues from './components/Catalogues'
import About from './components/About'
import Difference from './components/Difference'

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <Catalogues />
      <Difference />
    </>
  )
} 