import MapPhaseOne from '../components/MapPhaseOne'
import firstPhase from '../data/firstPhase'

const PhaseOne = (props) => {
  return (
    <div>
      <main id="container">
          <h1 id="phase-font"> PHASE 1</h1>
        <MapPhaseOne film={props.film} movies={firstPhase} />
      </main>
    </div>
  )
}

export default PhaseOne
