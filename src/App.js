import React, { Component } from 'react';
import Game from './eng'
import './App.css';

const game = new Game;






export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: null
    };
  };
  componentWillMount() {
    // let board = game.start()
    // this.setState({ board })
  }
  pick = data => {
    let board = game.pick(data)
    this.setState({ board })

  }
  restart = () => {
    let board = game.start()
    this.setState({ board })
  }

  render() {

    const { board } = this.state
    return (
      <section>
        <div className="main">
          <div className="container">
            <h1>MANCALA V1</h1>
            {
              board ? <div className="board">
                <div className="bank" id="p2_bank">
                  P1
                   <br />
                  <br />
                  {board.playerOne.bank.balance}
                </div>
                <div className="pocket_container">
                  <div className="pocket_rows" id="p2_pocket_rows">
                    {
                      board.playerTwo.pockets.map(item => <div className="pocket_col" key={item.position} onClick={() => this.pick(item)}> <span>{item.payload}</span></div>)
                    }

                  </div>
                  <div className="pocket_rows" id="p1_pocket_rows">
                    {
                      board.playerOne.pockets.map(item => <div className="pocket_col" key={item.position} onClick={() => this.pick(item)}> <span>{item.payload}</span></div>)
                    }
                  </div>
                </div>
                <div className="bank" id="p1_bank">                P2
                <br />
                  <br />
                  {board.playerTwo.bank.balance} </div>
              </div> : null
            }
            <div onClick={() => this.restart()}>

              <h1>PRESS START</h1>
            </div>
            <h1>MENU</h1>
          </div>
        </div>
      </section>
    )
  }
}



