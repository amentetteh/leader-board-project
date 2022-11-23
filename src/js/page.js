const content = document.getElementById('content');
const page = `
<header id = "main-header">
    <h1>Leaderboard</h1>
</header>
<main>
    <section id = "left-section">
        <header id = "left-header">
            <h2>Recent scores</h2>
            <button class="refresh-btn">Refresh</button>
        </header>
        <div id="left-container">
            <ul>
            <li>Name: 100</li>
            <li>Name: 20</li>
            <li>Name: 50</li>
            <li>Name: 78</li>
            <li>Name: 125</li>
            <li>Name: 77</li>
            <li>Name: 42</li>
            </ul>
        </div>
    </section>
    <section id = "right-section">
        <header id = "right-header">
            <h2>Add your score</h2>
        </header>
        <div id="right-container">
            <form>
                <input type="text" id="name" placeholder="Your name">
                <input type="text" id="score" placeholder="Your score">
                <button type="submit" class="score-submit-btn">Submit</button>
            </ul>
        </form>
    </section>
</main>
`;
const renderPage = () => {
  content.insertAdjacentHTML('beforeend', page);
};
export default renderPage;