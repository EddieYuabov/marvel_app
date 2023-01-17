import MapPhaseThree from '../components/MapPhaseThree'
import thirdPhase from '../data/thirdPhase'

const PhaseThree = (props) => {
  return (
    <div>
      <h1 id="header"> PHASE 3</h1>
      <main>
        <MapPhaseThree film={props.film} movies={thirdPhase} />
      </main>
    </div>
  )
}

export default PhaseThree
