import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css";
const Welcome =() => {

    return (
        <section className={'welcome'}>
           <div><h3>start where you are,</h3></div>
            <h4>use what you have,</h4>
            <h4>do what you can,</h4>
            <nav className={classes.nav}>
                <NavLink activeClassName={classes.active} to={'/add-note'}><h1>take a note.</h1></NavLink>
            </nav>
        </section>
    );
};
export default Welcome;