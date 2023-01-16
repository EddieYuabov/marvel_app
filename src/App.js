import './App.css'
import movies from './data'
import Home from './pages/Home'
import { useState } from 'react'
import Movie from './pages/Movie'
import Nav from './components/Nav'
import Search from './components/Search'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [results, setResults] = useState([])
  const [input, setInput] = useState('')
  const [film, setFilm] = useState(movies)
  const handleChange = (event) => {
    setInput(event.target.value)
  }
  const addSearch = () => {
    let search = [...results, input]
    setResults(search)
    setInput('')
  }
  const removeSearch = (index) => {
    let search = [...results]
    search.splice(index, 1)
    setResults(search)
  }

  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <Routes>
        <Route path="/" element={<Home film={film} />} />
        <Route
          path="/favorites"
          element={
            <Search
              addSearch={addSearch}
              removeSearch={removeSearch}
              handleChange={handleChange}
              input={input}
              results={results}
            />
          }
        />
        <Route path="/:id" element={<Movie film={film} />} />
      </Routes>
      <section></section>
    </div>
  )
}

export default App
