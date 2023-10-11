const getCars = async () => {
  try {
    const results = await fetch('http://localhost:3030/cars')
    const data = await results.json()
    return data
  } catch (error) {
    console.error(error)
  }
}   

export default getCars  