import {Link} from 'react-router-dom'
const Nav = () => {

    return (
        <div id="nav">
            <div id = 'nav-home'>
                <Link to = '/' className='link'><p className="nav-font">All movies</p></Link>   
            </div>
            <Link to = '/phase1' className='link'><p className="nav-font">Phase 1</p></Link>
            <Link to = '/phase2' className='link'><p className="nav-font">Phase 2</p></Link>
            <Link to = '/phase3' className='link'><p className="nav-font">Phase 3</p></Link>
            <Link to = '/phase4' className='link'><p className="nav-font">Phase 4</p></Link>
            <Link to = '/phase5' className='link'><p className="nav-font">Phase 5</p></Link>
            <Link to = '/shows' className='link'><p className="nav-font">Shows</p></Link>
        </div>
    )
}

export default Nav