import React from 'react'
import { useNavigate } from 'react-router-dom'
import { InputGroup, InputGroupInput } from '@/components/ui/input-group'
import { Button } from '@/components/ui/button'
import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import axios from 'axios'
import config from '@/config'

function Home() {
  const navigate = useNavigate()
  const [query, setQuery] = React.useState('')
  const [data, setData] = React.useState(null)
  const [activePage, setActivePage] = React.useState(1)

  const handleSearchQuery = (e) => {
    setQuery(e.target.value)
    // suggestion titles
    // if character count is greater than 3, fetch suggestions from the API
    console.log(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`${config.BASE_URL}apikey=${config.API_KEY}&s=${query}`)
      if (response.data.Response === 'False') {
        console.error('Error fetching movie data:', response.data.Error)
        navigate(`*`)
        return
      }
      setData(response.data)
      console.log(response.data)
      navigate(`/searchResults/${query}`, { state: { data: response.data } })
    } catch (error) {
      console.error('Error fetching movie data:', error)
      navigate(`*`)
    }
  }

  return (
    <div className="flex h-screen w-full max-w-sm items-center justify-center mx-auto">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-3xl font-bold text-center">MoveeQ</h1>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroupInput type="search" placeholder="Search" onChange={(e) => handleSearchQuery(e)} />
            <Button variant="transparent" size="sm" className="" type="submit" onClick={(e) => handleSubmit(e)}>
              <MagnifyingGlassIcon className="" />
            </Button>
          </InputGroup>
        </form>
      </div>
    </div>
  )
}

export default Home