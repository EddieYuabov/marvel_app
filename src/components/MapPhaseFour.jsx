import { useNavigate } from "react-router-dom";

const MapPhaseFour = (props) => {
    let navigate = useNavigate()

    const showMovie = (movie) => {
        navigate(`${movie.id}`)
    }

    return(
        <div> 
            <div id="movie-list">
            {props.movies.map((movie) => (
                <div key={movie.id} className = 'movie-map' >
                    <img className = 'map-img' src = {movie.img} alt={movie.name} onClick = {() => showMovie(movie)}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default MapPhaseFour