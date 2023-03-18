export default class GameManager {
    static newGame() {
        const game = {
            lives: 5,
            points: 0,   
        }

        GameManager.setGame(game);
        console.log("New game started");
    }

    static incrementPoints() {
        const game = GameManager.getGame();
        game.points += 100;  
        GameManager.setGame(game);
    }

    static decrementLives() {
        const game = GameManager.getGame();
        game.lives -= 1;
        GameManager.setGame(game);
    }

    static getGame() {
        return JSON.parse(localStorage.getItem("game"));
    }

    static setGame(gameObject) {
        localStorage.setItem("game", JSON.stringify(gameObject));
    }
}
