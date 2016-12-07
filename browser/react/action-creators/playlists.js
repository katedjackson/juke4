import {RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS} from '../constants';
import axios from 'axios';
import {convertSong} from '../utils'

export const onLoad = function(albums, artists, playlists) {

  playlists: playlists

  return {
    type: RECEIVE_ARTISTS,
    artists : artists
  }
}
