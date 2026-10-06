import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import config from '@/config'
import { Spinner } from '@/components/ui/spinner'
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from '@phosphor-icons/react'

function MovieDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const url = `https://omdbapi.com?i=${id}&plot=full&apikey=${config.API_KEY}`
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState(null)

  useEffect(() => {
    fetchMovieDetails()
  }, [])

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      console.log(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching movie details:', error)
      setLoading(false)
    }
  }

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="p-8">
          <Button variant="transparent" onClick={() => navigate(-1)} className="mb-4 mr-2">
            <ArrowLeftIcon aria-hidden="true"/>
          </Button>
          <div className="flex flex-row gap-8">
            <div className="flex-shrink-0">
              <img src={data?.Poster} alt={data?.Title} className="mb-4 rounded" />
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">{data?.Title} ({data?.Year})</h1>
              <p>{data?.Plot}</p>
              <p><strong>Director:</strong> {data?.Director}</p>
              <p><strong>Actors:</strong> {data?.Actors}</p>
              <p><strong>Genre:</strong> {data?.Genre}</p>
              <p><strong>Runtime:</strong> {data?.Runtime}</p>
              <p><strong>IMDB Rating:</strong> {data?.imdbRating}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default MovieDetails