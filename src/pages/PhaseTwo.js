import MapPhaseTwo from '../components/MapPhaseTwo'
import secondPhase from '../data/secondPhase'

const PhaseTwo = (props) => {
  return (
    <div>
      <h1 id="header"> PHASE 2</h1>
      <main>
        <MapPhaseTwo film={props.film} movies={secondPhase} />
      </main>
    </div>
  )
}

export default PhaseTwo
