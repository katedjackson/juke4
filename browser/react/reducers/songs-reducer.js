import {
  RECIEVE_SONGS
} from '../constants';

export const initialPlayerState = {
  songs: []
};

export default function (state = initialPlayerState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECIEVE_SONGS:
      newState.songs = action.songs;
      break;

    default:
      return state;

  }

  return newState;

}
