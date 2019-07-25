import React, { Component } from "react";
import Player from "./components/Player";

class App extends Component {
  state = {
    score: 0,
    clickedPlayers: []
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

  shufflePlayers = playerArray => {
    let ctr = playerArray.length;
    let temp;
    let index;

    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = playerArray[ctr];
      playerArray[ctr] = playerArray[index];
      playerArray[index] = temp;
    }

    return playerArray;
  };

  handlePlayerClick = currentPlayer => {
    this.shufflePlayers(this.playerImages);
    let score = this.state.score;
    let clickedPlayers = this.state.clickedPlayers;

    if (!clickedPlayers.includes(currentPlayer)) {
      clickedPlayers.push(currentPlayer);
      score++;
      this.setState({
        score: score
      });
    } else {
      this.setState({
        score: 0,
        clickedPlayers: []
      });
    }
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
              click={() => this.handlePlayerClick(player)}
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
          <div className="container">
            <h1>Boston Red Sox Shuffle</h1>
            <h2>Score: {this.state.score} </h2>
          </div>
        </div>
        <div className="container" style={containerStyle}>
          {players}
        </div>
      </div>
    );
  }
}

export default App;
