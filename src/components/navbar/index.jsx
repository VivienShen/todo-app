import {
    NavLink
} from 'react-router-dom';
import "./styles.css";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/"> {/*so the other page including a slash won't be cognized as the home page*/}
                        My Todos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/new" activeClassName="nav-selected">
                        New Todo
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
