import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="about">click here</Link>
            </li>
        </ul>
    </nav>

);

export default NavBar;