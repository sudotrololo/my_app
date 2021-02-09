import {NavLink} from "react-router-dom";
import css from "./nav.module.css"

const Nav = () => {
    return (
        <nav>
            <NavLink to="/messages">Messages</NavLink>
            <NavLink to="/posts">Posts</NavLink>
        </nav>
    )
}

export default Nav