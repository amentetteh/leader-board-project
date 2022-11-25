import renderPage from './page.js';
import '../css/style.css';
import API from './modules/api.js';
import Game from './modules/model/game.js';
import GameUI from './modules/gameui.js';

const nGame = new Game();

renderPage();
document.querySelector('.score-submit-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const fields = e.target.parentElement.getElementsByTagName('input');
  const name = fields[0].value;
  const score = fields[1].value;
  const game = new Game(name, score);
  game.save();
  GameUI.addScoreToUI(game, 'list');
  GameUI.clearFom('game-form');
});

document.querySelector('.refresh-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const scoreList = nGame.getAllScore();
  GameUI.displayScore(scoreList);
});

document.addEventListener('DOMContentLoaded', () => {
  const game = localStorage.getItem('gameID');
  if (game) {
    const scoreList = nGame.getAllScore();
    GameUI.displayScore(scoreList);
  } else {
    const newGame = API.createGame('Atikaka');
    newGame
      .then((res) => res)
      .catch((error) => error);
  }
});
