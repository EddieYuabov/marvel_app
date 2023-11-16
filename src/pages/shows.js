import MapShows from '../components/MapShows'
import shows from '../data/shows'

const Shows = (props) => {
  return (
    <div>
      <main id="container">
        <div id="phase">
          <img id="header" src={require('../img/marvel2.png')} alt="logo" />
          <h1 id="shows-font"> SHOWS</h1>
        </div>
        <MapShows film={props.film} movies={shows} />
      </main>
    </div>
  )
}

export default Shows
