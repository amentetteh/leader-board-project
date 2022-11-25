import renderPage from './page.js';
import '../css/style.css';
import API from './modules/api.js';
import Game from './modules/model/game.js';
import GameUI from './modules/gameui.js';
import Util from './util.js';

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
  const messageBox = document.querySelector('.message');
  let message = 'Error(s):<br>';
  if (name !== '' && score !== '' && Util.isString(name)) {
    const game = new Game(name, score);
    game.save();
    GameUI.addScoreToUI(game, 'list');
    GameUI.clearFom('game-form');
  } else {
    if (name === '') {
      message += 'Empty user name<br>';
    }

    if (name !== '' && !Util.isString(name)) {
      message += 'User name is not a strict string<br>';
    }

    if (score === '') {
      message += 'Score is empty';
    }
    GameUI.showAlert(messageBox, message);
  }
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
