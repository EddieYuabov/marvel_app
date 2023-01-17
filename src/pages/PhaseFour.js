import MapPhaseFour from '../components/MapPhaseFour'
import fourthPhase from '../data/fourthPhase'

const PhaseFour = (props) => {
  return (
    <div>
      <h1 id="header"> PHASE 4</h1>
      <main>
        <MapPhaseFour film={props.film} movies={fourthPhase} />
      </main>
    </div>
  )
}

export default PhaseFour
