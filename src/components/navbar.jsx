import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/"  className="text-black-300">Home</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-black-300">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;