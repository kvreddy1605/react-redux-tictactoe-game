import {START_GAME, WIN} from '../actions/index';
export default function gameStarted_Reducer(state=false, action){
  switch(action.type) {

    case START_GAME:
      return !state;

    case WIN:
        return !state

    default:
      return state;
  }
}
