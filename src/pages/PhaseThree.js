import MapPhaseThree from '../components/MapPhaseThree'
import thirdPhase from '../data/thirdPhase'

const PhaseThree = (props) => {
  return (
    <div>
      <main id="container">
        <div id="phase">
          <img id="header" src={require('../img/marvel2.png')} alt="logo" />
          <h1 id="phase-font"> PHASE 3</h1>
        </div>
        <MapPhaseThree film={props.film} movies={thirdPhase} />
      </main>
    </div>
  )
}

export default PhaseThree
