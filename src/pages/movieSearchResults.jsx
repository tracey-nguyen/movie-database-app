import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function MovieSearchResults() {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state?.data
  const [ loading, setLoading ] = React.useState(false)

  return (
    <div className="p-8">
      <Button variant="transparent" onClick={() => navigate(-1)} className="mb-4 mr-2">
        <ArrowLeftIcon aria-hidden="true" className="h-4 w-4" />
      </Button>
      {data && (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {data.Search.map((movie) => (
            <Card className="relative mx-auto w-full max-w-sm pt-0" onClick={() => navigate(`/movie/${movie.imdbID}`)} key={movie.imdbID}>
              <div key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} className="w-full h-auto" />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default MovieSearchResults