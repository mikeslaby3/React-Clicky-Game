import React from 'react';
import styles from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className="jumbotron" id={styles.jumbotron}>
          <div className="container">
            <div>
              <img
                className="mx-auto d-block"
                style={{ height: "200px" }}
                src={process.env.PUBLIC_URL + "/images/red-sox-logo.png"}
                alt="Red Sox Logo"
              />
              <h2 className="my-4 mx-auto text-center col-8">
                Click on an image to earn points, but don't click on any more
                than once!
              </h2>
            </div>
          </div>
        </div>
    )
}

export default Jumbotron



