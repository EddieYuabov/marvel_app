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
    <div className="detail-layout">
      <div>
        <img className="detail-img" src={movie.img} alt={movie.name} />
      </div>
      <div>
        <h1 className="font">{movie.name}</h1>
        <h3 className="rating">
          &nbsp;•&nbsp;Release Date: {movie.release_date}
        </h3>
        <h3 className="rating">&nbsp;•&nbsp;Runtime: {movie.run_time}</h3>
        <h3 className="rating">
          &nbsp;•&nbsp;Personal Rating: {movie.personal_rating}/10
        </h3>
        <br />
        <iframe
          className="iframe"
          width="800"
          height="450"
          src={movie.src}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  ) : null
}

export default Movie
