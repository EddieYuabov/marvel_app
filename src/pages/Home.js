import Map from '../components/Map'
import movies from '../data'
const Home = (props) => {
  return (
    <div>
      <h1 id="header">
        {' '}
        <i>MARVEL CINAMATIC UNIVERSE</i>
      </h1>
      <main>
        <Map film={props.film} movies={movies} />
      </main>
    </div>
  )
}

export default Home
