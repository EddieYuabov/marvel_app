import MapPhaseFive from '../components/MapPhaseFive'
import fifthPhase from '../data/fifthPhase'

const PhaseFive = (props) => {
  return (
    <div>
      <main id="container">
        <div id="phase">
          <img
            id="header"
            alt="Logo"
            src="https://www.thetruecolors.org/wp-content/uploads/2021/02/marvel-logo-header-1.jpg"
          />
          <h1 id="phase-font"> PHASE 5</h1>
        </div>
        <MapPhaseFive film={props.film} movies={fifthPhase} />
      </main>
    </div>
  )
}

export default PhaseFive
