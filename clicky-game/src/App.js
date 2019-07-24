import React, { Component } from "react";
import Player from "./components/Player";

class App extends Component {
  state = {
    score: 0,
    playerImages: [
      {
        image: "https://securea.mlb.com/mlb/images/players/head_shot/643217.jpg",
        name: "Andrew Benintendi",
        hasBeenClicked: false
      },
      {
        image: "https://securea.mlb.com/mlb/images/players/head_shot/571788.jpg",
        name: "Brock Holt",
        hasBeenClicked: false
      },
      {
        image: "https://securea.mlb.com/mlb/images/players/head_shot/656308.jpg",
        name: "Michael Chavis",
        hasBeenClicked: false
      },
      {
        image: "https://securea.mlb.com/mlb/images/players/head_shot/598265.jpg",
        name: "Jackie Bradley Jr.",
        hasBeenClicked: false
      },
      {
        image: "https://securea.mlb.com/mlb/images/players/head_shot/502110.jpg",
        name: "J.D. Martinez",
        hasBeenClicked: false
      },
      {
        image: "https://securea.mlb.com/mlb/images/players/head_shot/605141.jpg",
        name: "Mookie Betts",
        hasBeenClicked: false
      },
      {
        image: "https://securea.mlb.com/mlb/images/players/head_shot/519144.jpg",
        name: "Rick Porcello",
        hasBeenClicked: false
      },
      {
        image: "https://securea.mlb.com/mlb/images/players/head_shot/456034.jpg",
        name: "David Price",
        hasBeenClicked: false
      },
      {
        image: "https://securea.mlb.com/mlb/images/players/head_shot/646240.jpg",
        name: "Rafeal Devers",
        hasBeenClicked: false
      },
      {
        image: "https://securea.mlb.com/mlb/images/players/head_shot/519242.jpg",
        name: "Chris Sale",
        hasBeenClicked: false
      },
      {
        image: "https://securea.mlb.com/mlb/images/players/head_shot/543877.jpg",
        name: "Christian Vasquez",
        hasBeenClicked: false
      },
      {
        image: "https://securea.mlb.com/mlb/images/players/head_shot/593428.jpg",
        name: "Xander Bogaerts",
        hasBeenClicked: false
      }
    ]
  };

  shufflePlayers = (playerArray) => {
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
  }

  handlePlayerClick = (currentPlayer) => {
    this.shufflePlayers(this.state.playerImages);
    let score = this.state.score;

    if (currentPlayer.hasBeenClicked) {
      this.setState({
        score: 0
      })
    } else {
      score++
      this.setState({
        score: score
      })
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
        {this.state.playerImages.map((player, index) => {
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
          <h1>Boston Red Sox Shuffle</h1>
          <h2>Score: {this.state.score} </h2>
          <h2>High Score: </h2>
        </div>
        <div className="container" style={containerStyle}>
          {players}
        </div>
      </div>
    );
  }
}

export default App;
