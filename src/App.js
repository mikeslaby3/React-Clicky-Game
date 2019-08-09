import React, { Component } from "react";
import Player from "./components/Player";
import style from "./App.css";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    clickedPlayers: [],
    gameOverMessage: ""
  };

  playerImages = [
    {
      image: "benny.jpg",
      name: "Andrew Benintendi"
    },
    {
      image: "brock.jpg",
      name: "Brock Holt"
    },
    {
      image: "chavis.jpg",
      name: "Michael Chavis"
    },
    {
      image: "jbj.jpg",
      name: "Jackie Bradley Jr."
    },
    {
      image: "jdmartinez.jpg",
      name: "J.D. Martinez"
    },
    {
      image: "mookie.jpg",
      name: "Mookie Betts"
    },
    {
      image: "porcello.jpg",
      name: "Rick Porcello"
    },
    {
      image: "price.jpg",
      name: "David Price"
    },
    {
      image: "rafi.jpg",
      name: "Rafeal Devers"
    },
    {
      image: "sale.jpg",
      name: "Chris Sale"
    },
    {
      image: "vazquez.jpg",
      name: "Christian Vasquez"
    },
    {
      image: "xander.jpg",
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

  setHighScore = () => {
    let score = this.state.score;
    let highScore = this.state.highScore;

    if (score >= highScore) {
      this.setState({
        highScore: score
      })
    }
  }

  resetGame = gameOverMessage => {
    this.setState({
      score: 0,
      clickedPlayers: [],
      gameOverMessage: `${gameOverMessage} Click an image to play again`
    });
  }

  userScoring = currentlyClickedPlayer => {
    let score = this.state.score;
    let alreadyClickedPlayers = this.state.clickedPlayers;

    if (!alreadyClickedPlayers.includes(currentlyClickedPlayer)) {
      alreadyClickedPlayers.push(currentlyClickedPlayer);
      score++;
      this.setHighScore();
      if (score < 12) {
        this.setState({
          score: score,
          gameOverMessage: ""
        });
      } else {
        this.resetGame("YOU WIN!");
      }
    } else {
      this.resetGame("GAME OVER!");
    }
  };

  handlePlayerClick = currentPlayer => {
    this.shufflePlayers(this.playerImages);
    this.userScoring(currentPlayer);
  };

  renderImage = (imageURL, imageAltText) => {
    const style = {
      height: "150px",
      width: "100px",
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
              playerImage={this.renderImage(process.env.PUBLIC_URL + "/images/" + player.image, player.name)}
            />
          );
        })}
      </div>
    );

    const containerStyle = {
      width: "1000px"
    };

    const navStyling = {
      fontSize: "30px",
      fontWeight: "bold",
      color: "black"
    };

    const gameOverStyling = {
      color: "red",
      fontWeight: "bold",
      fontSize: "25px"
    }

    return (
      <div>
        <nav className="navbar sticky-top navbar-light bg-danger">
          <span className="navbar-brand" style={navStyling}>
            Red Sox Clicky Game
          </span>
          <span className="navbar-text" style={navStyling}>
            Score: {this.state.score} | High Score: {this.state.highScore}
          </span>
        </nav>
        <div className="jumbotron" style={style.jumbotron}>
          <div className="container">
            <div>
              <img
                className="mx-auto d-block"
                style={{ height: "200px" }}
                src="https://i.ya-webdesign.com/images/boston-red-sox-png-11.png"
                alt="Red Sox Logo"
              />
              <h2 className="my-4 mx-auto text-center col-8">
                Click on an image to earn points, but don't click on any more
                than once!
              </h2>
            </div>
          </div>
        </div>
        <div className="container" style={containerStyle}>
          <span className="text-center mx-auto d-block" style={gameOverStyling}>{this.state.gameOverMessage}</span>
          {players}
        </div>
      </div>
    );
  }
}

export default App;
