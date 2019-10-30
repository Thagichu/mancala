class Bank {
    constructor(balance) {
        this.balance = balance
    }
    add() {
        this.balance = this.balance + 1
    }
}
class Pocket {
    constructor(position, payload) {
        this.position = position
        this.payload = payload
    }
    add() {
        this.payload = this.payload + 1
    }
}
class Game {
    constructor() {
        this.startPayload = 4
        this.startBank = 0
        this.pocketCount = 6
        this.computerCount = 6
        this.pockets = []
        this.computerPockets = []
        this.board = {}
    }
    start() {
        this.board = null
        this.pockets = []
        this.computerPockets = []

        for (let index = 0; index < this.pocketCount; index++) {
            this.pockets.push(new Pocket(index, this.startPayload))
        }
        for (let j = 0; j < this.computerCount; j++) {
            this.computerPockets.push(new Pocket(j, this.startPayload))
        }
        this.board = {
            playerOne: {
                name: "Player One",
                bank: new Bank(this.startBank),
                pockets: this.pockets
            },
            playerTwo: {
                name: "Player Two",
                bank: new Bank(this.startBank),
                pockets: this.computerPockets
            },
        }

        return this.board
    }


    pick(pocket) {


        for (let i = pocket.position; i >= 0; i--) {
            this.board.playerOne.pockets[i].add()
            this.board.playerOne.pockets[pocket.position].payload = this.board.playerOne.pockets[pocket.position].payload - 1
        }
        if (pocket.payload <= 0) {
            return
        }
        while (this.board.playerOne.pockets[pocket.position].payload > 0) {
            this.board.playerOne.bank.balance = this.board.playerOne.bank.balance + 1
            this.board.playerOne.pockets[pocket.position].payload = this.board.playerOne.pockets[pocket.position].payload - 1
            if (this.board.playerOne.pockets[pocket.position].payload === 0) {
                return this.board
            }
            for (let k = 5; k > k - this.board.playerOne.pockets[pocket.position].payload; k--) {
                this.board.playerTwo.pockets[k].add()
                this.board.playerOne.pockets[pocket.position].payload = this.board.playerOne.pockets[pocket.position].payload - 1
            }
        }
        return this.board
    }
}

export default Game;  