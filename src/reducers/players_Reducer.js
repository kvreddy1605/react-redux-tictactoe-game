import {UPDATE_WINNER_PLAYER} from '../actions/index';
const INITAL_STATE = {
  playerOne: 0,
  playerTwo: 0
}
export default function players_Reducer(state=INITAL_STATE, action){
  switch (action.type) {

    case UPDATE_WINNER_PLAYER:
    const {sym} = action;
    if(sym==="X"){
      return {state, playerOne: ++state.playerOne, playerTwo: state.playerTwo};
    }
    else{
      return {state, playerTwo: ++state.playerTwo, playerOne: state.playerOne};

    }

    default:
      return state;

  }
}
