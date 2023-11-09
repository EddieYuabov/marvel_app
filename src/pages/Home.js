import Map from '../components/Map'
import movies from '../data/data'
import Footer from '../components/Footer'

const Home = (props) => {
  return (
    <div>
      <main id="container">
        <div id="header-background">
          <img
            id="header"
            alt="Logo"
            src="https://www.thetruecolors.org/wp-content/uploads/2021/02/marvel-logo-header-1.jpg"
          />
        </div>
        {/* <h1 id="header"> MARVEL CINAMATIC UNIVERSE</h1> */}
        <Map film={props.film} movies={movies} />
        <Footer />
      </main>
    </div>
  )
}

export default Home
