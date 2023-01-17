import MapPhaseFive from '../components/MapPhaseFive'
import fifthPhase from '../data/fifthPhase'

const PhaseFive = (props) => {
  return (
    <div>
      <h1 id="header"> PHASE 5</h1>
      <main>
        <MapPhaseFive film={props.film} movies={fifthPhase} />
      </main>
    </div>
  )
}

export default PhaseFive
