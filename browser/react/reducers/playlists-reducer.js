import {
  RECIEVE_PLAYLISTS,
  RECIEVE_PLAYLIST
} from '../constants';

export const initialPlayerState = {
  playlists: [],
  selectedPlaylist: {}
};

export default function (state = initialPlayerState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECIEVE_PLAYLISTS:
      newState.playlists = action.playlists;
      break;

    case RECIEVE_PLAYLIST:
      newState.selectedPlaylist = action.selectedPlaylist;
      break;

    default:
      return state;

  }

  return newState;

}
