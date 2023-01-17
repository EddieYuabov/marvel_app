import MapShows from '../components/MapShows'
import shows from '../data/shows'

const Shows = (props) => {
  return (
    <div>
      <h1 id="header"> SHOWS AND SPECIALS</h1>
      <main>
        <MapShows film={props.film} movies={shows} />
      </main>
    </div>
  )
}

export default Shows
