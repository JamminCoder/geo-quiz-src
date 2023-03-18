export default class GameManager {
    static newGame() {
        const emptyScores = {
            africa: 0,
            north_america: 0,
            south_america: 0,
            asia: 0,
            europe: 0,
            oceania: 0
        };

        const game = {
            lives: 5,
            points: 0,
            highScores: { 
                ...GameManager.getGame().highScores || emptyScores
            }
        }

        GameManager.setGame(game);
        console.log("New game started");
    }

    static incrementPoints(continent) {
        const game = GameManager.getGame();
        game.points += 100;

        if (game.points >= game.highScores[continent]) {
            game.highScores[continent] = game.points;
        }

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
