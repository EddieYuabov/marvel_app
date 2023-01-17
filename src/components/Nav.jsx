import {Link} from 'react-router-dom'
const Nav = () => {

    return (
        <div id="nav">
            <Link to = '/'><h3 className="nav-font">All movies</h3></Link>
            <Link to = '/phase1'><h3 className="nav-font">Phase 1</h3></Link>
            <Link to = '/phase2'><h3 className="nav-font">Phase 2</h3></Link>
            <Link to = '/phase3'><h3 className="nav-font">Phase 3</h3></Link>
            <Link to = '/phase4'><h3 className="nav-font">Phase 4</h3></Link>
            <Link to = '/phase5'><h3 className="nav-font">Phase 5</h3></Link>
            <Link to = '/shows'><h3 className="nav-font">Shows</h3></Link>
        </div>
    )
}

export default Nav