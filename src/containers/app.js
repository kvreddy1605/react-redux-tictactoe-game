import React, { Component } from 'react';
import {connect} from 'react-redux'
import Title from '../components/Title';
import Menu from './Menu';
import GameBoard from './gameBoard';
import ScoreBoard from './ScoreBoard';

class App extends Component {
  render() {
    const {gameStarted, players} = this.props;
    const {playerOne, playerTwo} = players;
    const showBoard = () => {
      if(gameStarted){
        return (
          <div>
            <GameBoard/>
          </div>
        )
      }
    }

    const showScoreBoard = () => {
      if(gameStarted || playerOne>0 || playerTwo>0){
        return (
          <div>
            <ScoreBoard/>
          </div>
        )
      }
    }

    return (
      <div>
          <Title/>
          <Menu/>
          {showBoard()}
          {showScoreBoard()}
      </div>
    );
  }
}


function mapStateToProps(state){
  const {gameStarted, players} = state;
  return{
    gameStarted,
    players

  }
}
export default connect(mapStateToProps)(App);
