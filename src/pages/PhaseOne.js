import MapPhaseOne from '../components/MapPhaseOne'
import firstPhase from '../data/firstPhase'

const PhaseOne = (props) => {
  return (
    <div>
      <main id="container">
        <div id="phase">
          <img id="header" src={require('../img/marvel2.png')} alt="logo" />
          <h1 id="phase-font"> PHASE 1</h1>
        </div>
        <MapPhaseOne film={props.film} movies={firstPhase} />
      </main>
    </div>
  )
}

export default PhaseOne
