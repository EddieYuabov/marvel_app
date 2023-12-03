import MapPhaseFour from '../components/MapPhaseFour'
import fourthPhase from '../data/fourthPhase'

const PhaseFour = (props) => {
  return (
    <div>
      <main id="container">
          <h1 id="phase-font"> PHASE 4</h1>
        <MapPhaseFour film={props.film} movies={fourthPhase} />
      </main>
    </div>
  )
}

export default PhaseFour
