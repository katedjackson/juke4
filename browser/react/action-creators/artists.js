import {RECEIVE_ARTIST, RECEIVE_ARTISTS} from '../constants';
import axios from 'axios';
import {convertAlbums, convertSong} from '../utils';

export const selectArtist = function (artistId) {

  return function(dispatch){
    Promise
      .all([
        axios.get(`/api/artists/${artistId}`),
        axios.get(`/api/artists/${artistId}/albums`),
        axios.get(`/api/artists/${artistId}/songs`)
      ])
      .then(res => res.map(r => r.data))
      .then(data => dispatch(onLoadArtist(...data)));
    }
  }

export const onLoadArtist (artist, albums, songs) {

  albums = convertAlbums(albums);
  songs = songs.map(convertSong);
  artist.albums = albums;
  artist.songs = songs

  return {
    type: RECEIVE_ARTIST,
    selectedArtist: artist

  }
}

export const onLoad = function(albums, artists, playlists) {

  return {
    type: RECEIVE_ARTISTS,
    artists : artists
  }
}
