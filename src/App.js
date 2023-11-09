import './App.css'
import Home from './pages/Home'
import movies from './data/data'
import { useState } from 'react'
import shows from './data/shows'
import Movie from './pages/Movie'
import Nav from './components/Nav'
import PhaseOne from './pages/PhaseOne'
import PhaseTwo from './pages/PhaseTwo'
import PhaseThree from './pages/PhaseThree'
import firstPhase from './data/firstPhase'
import fifthPhase from './data/fifthPhase'
import thirdPhase from './data/thirdPhase'
import secondPhase from './data/secondPhase'
import fourthPhase from './data/fourthPhase'
import { Routes, Route } from 'react-router-dom'
import PhaseFour from './pages/PhaseFour'
import PhaseFive from './pages/PhaseFive'
import Shows from './pages/shows'

function App() {
  const [all] = useState(movies)
  const [p1] = useState(firstPhase)
  const [p2] = useState(secondPhase)
  const [p3] = useState(thirdPhase)
  const [p4] = useState(fourthPhase)
  const [p5] = useState(fifthPhase)
  const [show] = useState(shows)

  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <Routes>
        <Route path="/" element={<Home film={all} />} />
        <Route path="/:id" element={<Movie film={all} />} />
        <Route path="/phase1" element={<PhaseOne film={p1} />} />
        <Route path="/phase1/:id" element={<Movie film={p1} />} />
        <Route path="/phase2" element={<PhaseTwo film={p2} />} />
        <Route path="/phase2/:id" element={<Movie film={p2} />} />
        <Route path="/phase3" element={<PhaseThree film={p3} />} />
        <Route path="/phase3/:id" element={<Movie film={p3} />} />
        <Route path="/phase4" element={<PhaseFour film={p4} />} />
        <Route path="/phase4/:id" element={<Movie film={p4} />} />
        <Route path="/phase5" element={<PhaseFive film={p5} />} />
        <Route path="/phase5/:id" element={<Movie film={p5} />} />
        <Route path="/shows" element={<Shows film={show} />} />
        <Route path="/shows/:id" element={<Movie film={show} />} />
      </Routes>
    </div>
  )
}

export default App
