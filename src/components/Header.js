import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <div className={classes.header}>

            <NavLink to={'/welcome'} className={classes.r}> <img src={'./icons8-note-50.png'} alt="My logo" /></NavLink>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to={'/welcome'}>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink  activeClassName={classes.active} to={'/note-list'}>All Notes</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to={'/search-history'}>Search History</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to={'/add-note'}>New Note</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Header;