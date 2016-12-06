import {
  RECIEVE_ALBUMS,
  RECIEVE_ALBUM
} from '../constants';

export const initialPlayerState = {
  albums: [],
  selectedAlbum: {}
};

export default function (state = initialPlayerState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECIEVE_ALBUMS:
      newState.albums = action.albums;
      break;

    case RECIEVE_ALBUM:
      newState.selectedAlbum = action.selectedAlbum;
      break;

    default:
      return state;

  }

  return newState;

}
