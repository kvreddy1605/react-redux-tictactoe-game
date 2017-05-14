import {TOGGLE_PLAYER_TURN, RESET_PLAYER_COUNT} from '../actions/index';
export default function moveCount_Reducer(state=0, action){
  switch (action.type) {

    case TOGGLE_PLAYER_TURN:
      return ++state

    case RESET_PLAYER_COUNT:
      state = 0;
      return state

    default:
      return state

  }
}
