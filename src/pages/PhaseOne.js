import MapPhaseOne from '../components/MapPhaseOne'
import firstPhase from '../data/firstPhase'

const PhaseOne = (props) => {
  return (
    <div>
      <main id="container">
        <div id="phase">
          <img
            id="header"
            alt="Logo"
            src="https://www.thetruecolors.org/wp-content/uploads/2021/02/marvel-logo-header-1.jpg"
          />
          <h1 id="phase-font"> PHASE 1</h1>
        </div>
        <MapPhaseOne film={props.film} movies={firstPhase} />
      </main>
    </div>
  )
}

export default PhaseOne
