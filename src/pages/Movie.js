import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Movie = (props) => {
  const [movie, setMovie] = useState('')
  let { id } = useParams()

  useEffect(() => {
    let selectedMovie = props.film.find((movie) => movie.id === parseInt(id))

    setMovie(selectedMovie)
  }, [props.film, id])

  return movie ? (
    <div id="movie-card-container">
      <div id="movie-card-layout">
        <div className="details">
          <div>
            <img id="movie-card-img" src={movie.img} alt={movie.name} />
          </div>
          <h1 id="movie-font">{movie.name}</h1>
          <div id="rating-display">
            <h3 className="rating">
              &nbsp;•&nbsp;Release Date: {movie.release_date}
            </h3>
            <h3 className="rating">&nbsp;•&nbsp;Runtime: {movie.run_time}</h3>
            <h3 className="rating">
              &nbsp;•&nbsp;Personal Rating: {movie.personal_rating}/10
            </h3>
          </div>
        </div>
        <div id="iframe-container">
          <br />
          <iframe
            className="iframe"
            width="800"
            height="450"
            src={movie.src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  ) : null
}

export default Movie
