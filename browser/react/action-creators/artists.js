import {RECEIVE_ARTIST, RECEIVE_ARTISTS} from '../constants';
import axios from 'axios';
import AUDIO from '../audio';
import { convertAlbum, convertAlbums, convertSong, skip } from '../utils';
import {getState} from 'redux';


export const selectArtist = function (artistId) {

  return function(dispatch, getState){
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
    
  }

  export const onLoad = function(albums, artists, playlists) {
    
    albums: convertAlbums(albums),
    artists: artists,
    playlists: playlists

    return {
      type: RECEIVE_ARTISTS,
      artists : artists
    }
  }