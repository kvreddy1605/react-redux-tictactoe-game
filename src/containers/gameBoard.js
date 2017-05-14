/*
//==============================================================================
  GAME BORAD

  (0)TOP-LEFT          (1)TOP-MID           (2)TOP-RIGHT
  (3)MID-LEFT          (4)MID-MID           (5)MID-RIGHT
  (6)BUTTOM-LEFT       (7)BUTTOM-MID        (8)BUTTOM-RIGHT

//==============================================================================

  0 = player one
  1 = player two

//==============================================================================
*/

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {togglePlayerTurn, move, win, resetBoard, resetPlayerCount, updateWinnerPlayer} from '../actions/index';

class GameBoard extends Component{
  constructor(props){
    super(props);
    this.checkForWin = this.checkForWin.bind(this);
    this.handleWin = this.handleWin.bind(this);
    this.performMove = this.performMove.bind(this);
    this.handleDraw = this.handleDraw.bind(this);
  }

  handleWin(sym){
    const {win, resetBoard, resetPlayerCount, updateWinnerPlayer} = this.props;
    win();
    resetBoard();
    resetPlayerCount();
    updateWinnerPlayer(sym)
    alert(`winner is ${sym}`)
  }

  handleDraw(){
    const {resetBoard, resetPlayerCount} = this.props;
    alert("DRAW, RESETTING BOARD");
    resetBoard();
    resetPlayerCount();
  }

  checkForWin(sym){
    const {gameArray, gameStarted, moveCount} = this.props;
    // winnning conditions for accross
    if(gameArray[0]===sym && gameArray[1]===sym && gameArray[2]===sym){
      this.handleWin(sym);
    }
    else{
      if(gameArray[3]===sym && gameArray[4]===sym && gameArray[5]===sym){
        this.handleWin(sym);
      }
      else{
        if(gameArray[6]===sym && gameArray[7]===sym && gameArray[8]===sym){
          this.handleWin(sym);
        }
        else{
          // winnning conditions for vertical
          if(gameArray[0]===sym && gameArray[3]===sym && gameArray[6]===sym){
            this.handleWin(sym);
          }
          else{
            if(gameArray[1]===sym && gameArray[4]===sym && gameArray[7]===sym){
              this.handleWin(sym);
            }
            else{
              if(gameArray[2]===sym && gameArray[5]===sym && gameArray[8]===sym){
                this.handleWin(sym);
              }
              else{
                // winnning conditions for diagnol
                if(gameArray[0]===sym && gameArray[4]===sym && gameArray[8]===sym){
                  this.handleWin(sym);
                }
                else{
                  if(gameArray[2]===sym && gameArray[4]===sym && gameArray[6]===sym){
                    this.handleWin(sym);
                  }
                  else{
                    // draw
                    if(moveCount===8 && gameStarted===true ){
                      this.handleDraw();
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  performMove(boardNumber, sym){
    const {togglePlayerTurn, move} = this.props;
    move(boardNumber, sym);
    togglePlayerTurn();
    this.checkForWin(sym);
  }

  handleOnClick(boardNumber, event){
    const {playerTurn, gameArray} = this.props;
    if(playerTurn==0 && gameArray[boardNumber]==null ){
        this.performMove(boardNumber, "X");
    }
    else{
      if(playerTurn==1 && gameArray[boardNumber]==null ){
          this.performMove(boardNumber, "O")
      }
      else{
          alert("incorrect move");

      }
    }

  }

  render(){
    const {gameArray} = this.props;
    return(

      <div className="container space">

        <div className="row">

                <div className="col-xs-4 col-sm-4 box TOP-LEFT" onClick={this.handleOnClick.bind(this, 0)}>{gameArray[0]}</div>
                <div className="col-xs-4 col-sm-4 box TOP-MID" onClick={this.handleOnClick.bind(this, 1)} >{gameArray[1]}</div>
                <div className="col-xs-4 col-sm-4 box TOP-RIGHT" onClick={this.handleOnClick.bind(this, 2)} >{gameArray[2]}</div>
        </div>

        <div className="row">

                <div className="col-xs-4 col-sm-4 box MID-LEFT" onClick={this.handleOnClick.bind(this, 3)} >{gameArray[3]}</div>
                <div className="col-xs-4 col-sm-4 box MID-MID" onClick={this.handleOnClick.bind(this, 4)} >{gameArray[4]}</div>
                <div className="col-xs-4 col-sm-4 box MID-RIGHT" onClick={this.handleOnClick.bind(this, 5)} >{gameArray[5]}</div>
        </div>

        <div className="row">

                <div className="col-xs-4 col-sm-4 box BUTTOM-LEFT" onClick={this.handleOnClick.bind(this, 6)} >{gameArray[6]}</div>
                <div className="col-xs-4 col-sm-4 box BUTTOM-MID" onClick={this.handleOnClick.bind(this, 7)} >{gameArray[7]}</div>
                <div className="col-xs-4 col-sm-4 box BUTTOM-RIGHT" onClick={this.handleOnClick.bind(this, 8)} >{gameArray[8]}</div>
        </div>

      </div>
    );
  }
}
function mapStateToProps(state){
  const {playerTurn, gameArray, win, moveCount, gameStarted} = state;
  return{
    playerTurn,
    gameArray,
    moveCount,
    gameStarted
  }
}

export default connect(mapStateToProps, {togglePlayerTurn, move, win, resetBoard, resetPlayerCount, updateWinnerPlayer} )(GameBoard);
