import renderPage from './page.js';
import '../css/style.css';
import API from './modules/api.js';
import Game from './modules/model/game.js';
import GameUI from './modules/gameui.js';

const nGame = new Game();

renderPage();
const refreshList = () => {
  const scoreList = nGame.getAllScore();
  GameUI.displayScore(scoreList);
};
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
  refreshList();
});

document.addEventListener('DOMContentLoaded', () => {
  const game = localStorage.getItem('gameID');
  if (game) {
    refreshList();
  } else {
    const newGame = API.createGame('Atikaka');
    newGame
      .then(() => {
        refreshList();
      })
      .catch((error) => error);
  }
});
