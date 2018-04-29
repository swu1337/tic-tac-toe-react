import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
            <header className="App-header">
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">React Tic Tac Toe</h1>
                </div>
            </header>
            <Game />
      </div>
    );
  }
}

export default App;
