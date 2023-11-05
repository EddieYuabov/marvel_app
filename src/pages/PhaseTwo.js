import MapPhaseTwo from '../components/MapPhaseTwo'
import secondPhase from '../data/secondPhase'

const PhaseTwo = (props) => {
  return (
    <div>
      <main id="container">
        <div id="phase">
          <img
            id="header"
            alt="Logo"
            src="https://www.thetruecolors.org/wp-content/uploads/2021/02/marvel-logo-header-1.jpg"
          />
          <h1 id="phase-font"> PHASE 2</h1>
        </div>
        <MapPhaseTwo film={props.film} movies={secondPhase} />
      </main>
    </div>
  )
}

export default PhaseTwo
