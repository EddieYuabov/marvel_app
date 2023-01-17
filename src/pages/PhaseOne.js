import MapPhaseOne from '../components/MapPhaseOne'
import firstPhase from '../data/firstPhase'

const PhaseOne = (props) => {
  return (
    <div>
      <h1 id="header"> PHASE 1</h1>
      <main>
        <MapPhaseOne film={props.film} movies={firstPhase} />
      </main>
    </div>
  )
}

export default PhaseOne
