import API from '../api.js';

class Game {
  constructor(name, score, gameID = localStorage.getItem('gameID')) {
    this.gameID = gameID;
    // Fix later
    this.gameID = localStorage.getItem('gameID');
    this.name = name;
    this.score = score;
  }

  save() {
    API.saveScore(this.name, this.score, this.gameID);
  }

  getAllScore() {
    return API.getScores(this.gameID || localStorage.getItem('gameID'));
  }
}

export default Game;