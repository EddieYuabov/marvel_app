import { useNavigate } from "react-router-dom";

const Map = (props) => {
    
    let navigate = useNavigate()
    const showMovie = (movie) => {
        navigate(`${movie.id}`)
    }

    console.log(props.film)


    return(
    <div id="movie-list">
        {props.movies.map((movie) => (
            <div key={movie.id} className = 'movie-map' onClick = {() => showMovie(movie)} >
                <img className = 'map-img' src = {movie.img} alt={movie.name}/>
                <h2 className="font">{movie.name}</h2>
            </div>
        ))}
    </div>
    )
}

export default Map