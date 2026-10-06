import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/home'
import MovieDetails from '@/pages/movieDetails'
import MovieSearchResults from '@/pages/movieSearchResults'
import NoResults from '@/pages/noResults'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoResults />} />
      <Route path="/searchResults/:query" element={<MovieSearchResults />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  )
}

export default App