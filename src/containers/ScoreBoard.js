import React, {Component} from 'react';
import {connect} from 'react-redux';

class ScoreBoard extends Component{
  render(){
    const {playerOne, playerTwo} = this.props.players;
    return(

      <div className="container space">

        <div className="row">
          <div className="col-xs-12 col-sm-12 text-center">
            <h1>ScoreBoard</h1>
          </div>
        </div>

        <div className="row text-center">

          <div className="col-xs-6 col-sm-6">
            <h1>Player One (X)</h1>
            <h4>{playerOne}</h4>
          </div>

          <div className="col-xs-6 col-sm-6">
            <h1>Player Two (O)</h1>
            <h4>{playerTwo}</h4>

          </div>

        </div>

      </div>

    );
  }
}

function mapStateToProps(state){
  const {players} = state;
  return{
    players
  }
}

export default connect(mapStateToProps)(ScoreBoard);
