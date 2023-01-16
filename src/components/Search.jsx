const Search = (props) => {
    return(
      <div className="search-backgroud">
        <section id = "search">
          <label>Personal favorite Marvel movie(click X to delete): </label>
          <input type = "text" onChange = {props.handleChange}/>
          <button className="search-button" onClick = {props.addSearch}>Add</button>
        </section>
        <section id = "results">
            {props.results.map((item, index) => (
                <div key = {index}> 
                    {item}
                    <button id = "map-delete" onClick={() => props.removeSearch(index)}>X</button>
                </div>
            ))}
        </section>
      </div>
    )
} 

export default Search