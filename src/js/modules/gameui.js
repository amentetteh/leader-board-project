class GameUI {
  static clearFom(formID) {
    document.getElementById(formID).reset();
  }

  static addScoreToUI(game, listID) {
    const listElement = document.getElementById(listID);
    const listElementItems = listElement.getElementsByTagName('li');
    const lastItem = listElementItems[listElementItems.length - 1].innerText;
    if (lastItem === 'No data to display' && listElementItems.length === 1) {
      listElement.innerHTML = '';
    }
    const li = `<li>${game.name} : ${game.score}</li>`;
    listElement.insertAdjacentHTML('afterbegin', li);
  }

  static displayScoreOnUI(list, listID) {
    let ul = '';
    if (list.length > 0) {
      ul = '';
      const sorted = list.sort(
        (x, y) => parseInt(y.score, 10) - parseInt(x.score, 10),
      );
      sorted.forEach((item) => {
        ul += `<li>${item.user}: ${item.score}</li>`;
      });
    } else {
      ul = '<li>No data to display</li>';
    }
    document.getElementById(listID).innerHTML = ul;
  }

  static displayScore(promise) {
    promise.then((value) => {
      GameUI.displayScoreOnUI(value.result, 'list');
    });
  }

  static showAlert=(msgBox, msg) => {
    msgBox.innerHTML = msg;
    // Vanish in 4 seconds
    setTimeout(() => {
      msgBox.innerHTML = '';
    }, 4000);
  }
}

export default GameUI;
