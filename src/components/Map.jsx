import { useNavigate } from "react-router-dom";

const Map = (props) => {
    let navigate = useNavigate()

    const showMovie = (movie) => {
        navigate(`${movie.id}`)
    }

    return(
        <div id="movie-container"> 
            <div id="movie-list">
            {props.movies.map((movie) => (
                <div key={movie.id} className = 'movie-map' >
                    <img className = 'map-img' src = {movie.img} alt={movie.name} onClick = {() => showMovie(movie)}/>
                    {/* <h2 className="font">{movieFont(movie.name)}</h2> */}
                </div>
            ))}
            </div>
        </div>
        
    )
}

export default Map