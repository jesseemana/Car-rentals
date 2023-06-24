interface CarCardProps {
  mpg: number 
  year: number 
  make: string
  drive: string
  model: string
  cityMPG: number
  transmission: string
}

interface HomeProps {
  searchParams: FilterProps
}

interface FilterProps {
  manufacturer?: string
  year?: number
  model?: string
  limit?: number
  fuel?: string
}
