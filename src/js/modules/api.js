class API {
    gameId = 'xjioIHchlLLAXzocxLXo';

    endPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

    constructor() {
      this.gameId = 'xjioIHchlLLAXzocxLXo';
      this.endPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    }

// Create game
static createGame = async (name, endPointx = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/') => {
  const response = await fetch(`${endPointx}`, {
    method: 'POST',
    body: JSON.stringify({
      name,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  const res = await response.json();
  const game = res.result.split(' ')[3];
  localStorage.setItem('gameID', game);
  return game;
};

  // add score
  static saveScore = async (user, score, gameId, endPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/') => {
    const response = await fetch(`${endPoint + gameId}/scores`, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  };

  // get scores
  static getScores = async (gameId, endPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/') => {
    const response = await fetch(`${endPoint + gameId}/scores`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  };
}
export default API;