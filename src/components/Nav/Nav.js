import React from "react";
import style from "./Nav.module.css";

const Nav = props => {
    return (
        <div>
            <nav className="navbar sticky-top navbar-light bg-danger">
                <span className={`navbar-brand ${style.nav}`}>
                    Red Sox Clicky Game
                </span>
                <span className={style.nav}>
                    Score: {props.score} | High Score: {props.highScore}
                </span>
            </nav>
        </div>
    )
}

export default Nav;
