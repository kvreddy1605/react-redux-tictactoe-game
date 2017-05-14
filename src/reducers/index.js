import { combineReducers } from 'redux';
import gameStarted_Reducer from './gameStarted_Reducer';
import PlayerTurn_Reducer from './PlayerTurn_Reducer';
import gameArray_Reducer from './gameArray_Reducer';
import players_Reducer from './players_Reducer';
import moveCount_Reducer from './moveCount_Reducer';

const rootReducer = combineReducers({
  gameStarted: gameStarted_Reducer,
  playerTurn: PlayerTurn_Reducer,
  gameArray: gameArray_Reducer,
  players: players_Reducer,
  moveCount: moveCount_Reducer
});

export default rootReducer;
