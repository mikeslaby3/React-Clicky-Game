import React, { Component } from "react";
import Player from "./components/Player";
// import Benny from './images/b'

class App extends Component {
  state = {
    score: 0,
    hasBeenClicked: false
  };

  playerImages = [
    {
      image: "https://securea.mlb.com/mlb/images/players/head_shot/643217.jpg",
      name: "Andrew Benintendi"
    },
    {
      image: "https://securea.mlb.com/mlb/images/players/head_shot/571788.jpg",
      name: "Brock Holt"
    },
    {
      image: "https://securea.mlb.com/mlb/images/players/head_shot/656308.jpg",
      name: "Michael Chavis"
    },
    {
      image: "https://securea.mlb.com/mlb/images/players/head_shot/598265.jpg",
      name: "Jackie Bradley Jr."
    },
    {
      image: "https://securea.mlb.com/mlb/images/players/head_shot/502110.jpg",
      name: "J.D. Martinez"
    },
    {
      image: "https://securea.mlb.com/mlb/images/players/head_shot/605141.jpg",
      name: "Mookie Betts"
    },
    {
      image: "https://securea.mlb.com/mlb/images/players/head_shot/519144.jpg",
      name: "Rick Porcello"
    },
    {
      image: "https://securea.mlb.com/mlb/images/players/head_shot/456034.jpg",
      name: "David Price"
    },
    {
      image: "https://securea.mlb.com/mlb/images/players/head_shot/646240.jpg",
      name: "Rafeal Devers"
    },
    {
      image: "https://securea.mlb.com/mlb/images/players/head_shot/519242.jpg",
      name: "Chris Sale"
    },
    {
      image: "https://securea.mlb.com/mlb/images/players/head_shot/543877.jpg",
      name: "Christian Vasquez"
    },
    {
      image: "https://securea.mlb.com/mlb/images/players/head_shot/593428.jpg",
      name: "Xander Bogaerts"
    }
  ];

  handlePlayerClick = () => {
    let score = this.state.score;
    score++;
    this.setState({
      score: score
    });
  };

  renderImage = (imageURL, imageAltText) => {
    const style = {
      height: "200px",
      width: "135px",
      cursor: "pointer",
      boxShadow: "3px 3px 5px 6px #ccc"
    };

    return (
      <div>
        <img style={style} src={imageURL} alt={imageAltText} />
      </div>
    );
  };

  render() {
    
    const players = (
      <div className="row">
        {this.playerImages.map((player, index) => {
          return (
            <Player
              click={this.handlePlayerClick}
              playerImage={this.renderImage(player.image, player.name)}
            />
          );
        })}
      </div>
    );

    const containerStyle = {
      width: "1000px"
      // backgroundColor: "blue"
    };

    return (
      <div>
        <div className="jumbotron">
          <h1>Boston Red Sox Shuffle</h1>
          <h2>Score: {this.state.score} </h2>
        </div>
        <div className="container" style={containerStyle}>
          {players}
        </div>
      </div>
    );
  }
}

export default App;
