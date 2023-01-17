import { useNavigate } from "react-router-dom";

const Map = (props) => {
    let navigate = useNavigate()

    const showMovie = (movie) => {
        navigate(`${movie.id}`)
    }

    // const movieFont = (word) => {
    //     let newWord = word.length
    //     if(newWord > 27){
    //         console.log("works")
    //         return word
    //     }
    //     return word
    // }


    return(
        <div> 
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