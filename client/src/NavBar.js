import React from "react";
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <div>
            <li>
                <Link to="/signup">Signup</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/books">Books</Link>
            </li>
        </div>
    )
}

export default NavBar
