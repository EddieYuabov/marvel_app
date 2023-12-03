import MapPhaseThree from '../components/MapPhaseThree'
import thirdPhase from '../data/thirdPhase'

const PhaseThree = (props) => {
  return (
    <div>
      <main id="container">
          <h1 id="phase-font"> PHASE 3</h1>
        <MapPhaseThree film={props.film} movies={thirdPhase} />
      </main>
    </div>
  )
}

export default PhaseThree
