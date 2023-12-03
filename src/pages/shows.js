import MapShows from '../components/MapShows'
import shows from '../data/shows'

const Shows = (props) => {
  return (
    <div>
      <main id="container">
          <h1 id="shows-font"> SHOWS</h1>
        <MapShows film={props.film} movies={shows} />
      </main>
    </div>
  )
}

export default Shows
