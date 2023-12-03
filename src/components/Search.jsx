import { useState } from "react"
import movies from "../data/data";
const Search = () => {

    const [input, setInput] = useState("")

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }
    if (input.length > 0) {
        movies.filter((item) => {
            let movie = item.name.match(input)
            return movie
        })
    }
    return (
        <input className="search_bar" type='text' placeholder='Find Movie' onChange={handleChange} />
    )
}

export default Search