interface CarProps {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}

interface OptionProps {
  title: string
  value: string
}

interface CustomFilterProps {
  title: string
  options: OptionProps[]
}

interface ShowMoreProps {
  pageNumber: number
  isNext: boolean
}

interface SearchManuFacturerProps {
  manufacturer: string
  setManuFacturer: (manufacturer: string) => void
}

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
