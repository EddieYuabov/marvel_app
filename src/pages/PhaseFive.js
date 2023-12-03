import MapPhaseFive from '../components/MapPhaseFive'
import fifthPhase from '../data/fifthPhase'

const PhaseFive = (props) => {
  return (
    <div>
      <main id="container">
          <h1 id="phase-font"> PHASE 5</h1>
        <MapPhaseFive film={props.film} movies={fifthPhase} />
      </main>
    </div>
  )
}

export default PhaseFive
