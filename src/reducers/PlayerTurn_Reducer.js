import {TOGGLE_PLAYER_TURN, RESET_PLAYER_COUNT} from '../actions/index';
export default function PlayerTurn_Reducer(state=0, action) {
  switch (action.type) {
    case TOGGLE_PLAYER_TURN:
    state = ++state;
      return state%2;

    case RESET_PLAYER_COUNT:
      return 0;


    default:
      return state;

  }
}
