import React, {Component} from 'react';
import Button from '../components/Button';
import {connect} from 'react-redux';
import {startGame, resetBoard, resetPlayerCount} from '../actions/index';

class Menu extends Component{
  constructor(props){
    super(props);
    this.start_Game = this.start_Game.bind(this);
    this.reset_Board = this.reset_Board.bind(this);
  }

  start_Game(event){
    const {startGame} = this.props;
    startGame();
  }

  reset_Board(){
    const {resetBoard, resetPlayerCount} = this.props;
    resetBoard();
    resetPlayerCount();
  }

  render(){
    const {gameStarted} = this.props;
    const _disabled = (gameStarted)?false:true;

    return(
      <div className="container space">
        <div className="row text-center">

          <div className="col-xs-6 col-sm-6">
            <Button className="btn btn-success" onClick={this.start_Game} disabled={!_disabled}>Start</Button>
          </div>

          <div className="col-xs-6 col-sm-6 pull-right">
            <Button className="btn btn-warning"  onClick={this.reset_Board} disabled={_disabled}>Refresh</Button>
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {gameStarted} = state;
  return{
    gameStarted
  }
}

export default connect(mapStateToProps, {startGame, resetBoard, resetPlayerCount})(Menu);
