export const START_GAME = "START_GAME";
export const TOGGLE_PLAYER_TURN = 'TOGGLE_PLAYER_TURN';
export const MOVE = 'MOVE';
export const WIN = 'WIN';
export const RESET_BOARD = 'RESET_BOARD';
export const RESET_PLAYER_COUNT = 'RESET_PLAYER_COUNT';
export const UPDATE_WINNER_PLAYER = 'UPDATE_WINNER_PLAYER';
export const MOVE_COUNT = 'MOVE_COUNT';

export function startGame(){
  return{
    type: START_GAME
  }
}

export function togglePlayerTurn(){
  return{
    type: TOGGLE_PLAYER_TURN
  }
}

export function move(boardNumber, symbol){
  return{
    type: MOVE,
    boardNumber,
    symbol
  }
}

export function win(){
  return{
    type: WIN
  }
}

export function resetBoard(){
  return{
    type: RESET_BOARD
  }
}

export function resetPlayerCount(){
  return{
    type: RESET_PLAYER_COUNT
  }
}

export function updateWinnerPlayer(sym){
  return{
    type: UPDATE_WINNER_PLAYER,
    sym
  }
}

export function moveCount(){
  return{
    type: MOVE_COUNT,
    sym
  }
}
