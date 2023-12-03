import MapPhaseTwo from '../components/MapPhaseTwo'
import secondPhase from '../data/secondPhase'

const PhaseTwo = (props) => {
  return (
    <div>
      <main id="container">
          <h1 id="phase-font"> PHASE 2</h1>
        <MapPhaseTwo film={props.film} movies={secondPhase} />
      </main>
    </div>
  )
}

export default PhaseTwo
