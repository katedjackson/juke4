import {
  RECIEVE_ARTISTS,
  RECIEVE_ARTIST
} from '../constants';

export const initialPlayerState = {
  artists: [],
  selectedArtist: {}
};

export default function (state = initialPlayerState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECIEVE_ARTISTS:
      newState.artists = action.artists;
      break;

    case RECIEVE_ARTIST:
      newState.selectedArtist = action.selectedArtist;
      break;

    default:
      return state;

  }

  return newState;

}