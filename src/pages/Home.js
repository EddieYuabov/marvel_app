import Map from '../components/Map'
import movies from '../data/data'
import Footer from '../components/Footer'

const Home = (props) => {
  return (
    <div>
      <main id="container">
        <div id="header-background">
          <img id="header" src={require('../img/marvel2.png')} alt="logo" />
        </div>
        {/* <h1 id="header"> MARVEL CINAMATIC UNIVERSE</h1> */}
        <Map film={props.film} movies={movies} />
      </main>
      <div id="footer-div">
        <Footer />
      </div>
    </div>
  )
}

export default Home
