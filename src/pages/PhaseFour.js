import MapPhaseFour from '../components/MapPhaseFour'
import fourthPhase from '../data/fourthPhase'

const PhaseFour = (props) => {
  return (
    <div>
      <main id="container">
        <div id="phase">
          <img id="header" src={require('../img/marvel2.png')} alt="logo" />
          <h1 id="phase-font"> PHASE 4</h1>
        </div>
        <MapPhaseFour film={props.film} movies={fourthPhase} />
      </main>
    </div>
  )
}

export default PhaseFour
