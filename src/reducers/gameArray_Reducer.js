import {MOVE, RESET_BOARD} from '../actions/index';

const INITALSTATE = [null,null,null,null,null,null,null,null,null];

export default function gameArray_Reducer(state=[], action){
  switch (action.type) {

    case MOVE:
      const {boardNumber, symbol} = action
      state[boardNumber] = symbol;
      return state;

    case RESET_BOARD:
      return [];

    default:
      return state

  }
}
