import './Nav.css'
import { Link } from 'react-router-dom';

function Nav (){
    return(
        <header>
            <h1>Pet Hotel</h1>
            <div className="navbar">
                <div className="navBox">
                    <Link to="/">
                        <p>Dashboard</p>
                    </Link>
                </div>
                <div className="navBox">
                    <Link to="/owner">
                        <p>Owner</p>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Nav;