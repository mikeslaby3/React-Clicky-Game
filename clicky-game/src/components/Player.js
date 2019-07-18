import React from "react";
import styles from "./Player.module.css";

const player = props => {
    return (
        <div className={styles.player} onClick={props.click}>
            {props.playerImage}
        </div>
    );
};

export default player;
