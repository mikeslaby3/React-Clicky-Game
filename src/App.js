import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Player from "./components/Player/Player";
import PlayerContainer from "./components/PlayerContainer/PlayerContainer";
import playerImages from "./playerImages";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    clickedPlayers: [],
    gameOverMessage: ""
  };

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
    this.shufflePlayers(playerImages);
    this.userScoring(currentPlayer);
  };

  render() {
    const players = (
      <div className="row">
        {playerImages.map((player, index) => {
          return (
            <Player
              click={() => this.handlePlayerClick(player)}
              image={process.env.PUBLIC_URL + "/images/" + player.image}
              alt={player.name}
            />
          );
        })}
      </div>
    );

    return (
      <div>
        <Nav score={this.state.score} highScore={this.state.highScore} />
        <Jumbotron />
        <PlayerContainer players={players} />
      </div>
    );
  }
}

export default App;
