import MapShows from '../components/MapShows'
import shows from '../data/shows'

const Shows = (props) => {
  return (
    <div>
      <main id="container">
        <div id="phase">
          <img
            id="header"
            alt="Logo"
            src="https://www.thetruecolors.org/wp-content/uploads/2021/02/marvel-logo-header-1.jpg"
          />
          <h1 id="shows-font"> SHOWS</h1>
        </div>
        <MapShows film={props.film} movies={shows} />
      </main>
    </div>
  )
}

export default Shows
