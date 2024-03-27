import { NavLink } from "react-router-dom";
/**Nav bar for site
 *
 * Nav -> About, Projects, Contact
 */

function Nav(){
    return(
        <nav className="NavBar">
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}

export default Nav;