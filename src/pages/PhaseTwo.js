import MapPhaseTwo from '../components/MapPhaseTwo'
import secondPhase from '../data/secondPhase'

const PhaseTwo = (props) => {
  return (
    <div>
      <main id="container">
        <div id="phase">
          <img id="header" src={require('../img/marvel2.png')} alt="logo" />
          <h1 id="phase-font"> PHASE 2</h1>
        </div>
        <MapPhaseTwo film={props.film} movies={secondPhase} />
      </main>
    </div>
  )
}

export default PhaseTwo
