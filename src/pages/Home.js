import Map from '../components/Map'
import movies from '../data/data'
import Footer from '../components/Footer'

const Home = (props) => {
  return (
    <div>
      <main id="container">
        <Map film={props.film} movies={movies} />
      </main>
      <div id="footer-div">
        <Footer />
      </div>
    </div>
  )
}

export default Home
