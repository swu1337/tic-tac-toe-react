import React, { Component } from 'react';
import { Square } from './Square';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            turn: 'X'
        };
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => {this.handleClick(i)}}
            />
        );
    }

    calculateWinner(squares) {
        const WIN_CONDITIONS = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ];

        for (let i = 0; i < WIN_CONDITIONS.length; i++) {
            let [a, b, c] = WIN_CONDITIONS[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    handleClick(i) {
        let squares = this.state.squares.slice();
        if(this.calculateWinner(squares) || squares[i]) return;
        squares[i] = this.state.turn === 'X' ? 'X' : 'O';
        this.setState({
          squares: squares,
          turn: this.state.turn === 'X' ? 'O' : 'X'
        });
    }

    render() {
        let status = `Next player: ${this.state.turn}`;
        let winner = this.calculateWinner(this.state.squares);

        if(winner) {
            status = `Winner:  ${winner}`;
        }

        return (
            <div>
                <div className="status">{status}</div>
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
            </div>
        );
    }
}

export default Board;
