import {Link} from 'react-router-dom'
const Nav = () => {

    return (
        <div id="nav">
            <Link to = '/'><h3 className="nav-font">Home</h3></Link>
            <Link to ='/favorites'><h3 className="nav-font">Top Picks</h3></Link>
        </div>
    )
}

export default Nav