import React from 'react';
import styles from "./PlayerContainer.module.css";

const PlayerContainer = (props) => {
    return (
        <div className="container" id={styles.container}>
            <span className="text-center mx-auto d-block" id={styles.gameOverMessage}>{props.message}</span>
            <div>
                {props.players}
            </div>
        </div>
    )
}

export default PlayerContainer;
