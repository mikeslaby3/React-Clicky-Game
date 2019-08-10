import React from "react";
import styles from "./Player.module.css";

const player = props => {
    return (
        <div className={styles.hvr} onClick={props.click}>
            {/* {props.playerImage} */}
            <img className={styles.player} src={props.image} alt={props.alt}></img>
        </div>
    );
};

export default player;
