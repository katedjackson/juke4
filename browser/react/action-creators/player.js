import {SET_CURRENT_SONG, START_PLAYING, STOP_PLAYING, SET_LIST} from '../constants';
import axios from 'axios';
import AUDIO from '../audio';
import { convertAlbum, convertAlbums, convertSong, skip } from '../utils';
import {getState} from 'redux';

export const startPlaying = function () {
  return {
    type: START_PLAYING
  };
};

export const stopPlaying = function () {
  return {
    type: STOP_PLAYING
  };
};

export const setCurrentSong = function (song) {
  return {
    type: SET_CURRENT_SONG,
    song
  };
};

export const setList = function (playlist) {
  return {
    type: SET_LIST,
    playlist
  };
};

export const play = () => dispatch => {
  AUDIO.play();
  dispatch(startPlaying());
};

export const pause = () => dispatch => {
  AUDIO.pause();
  dispatch(stopPlaying());
}

export const load = (song, playlist) => dispatch => {
  AUDIO.src = song.audioUrl;
  AUDIO.load();
  dispatch(setList(playlist));
  dispatch(setCurrentSong(song));
}

export const startSong = (song, playlist) => dispatch => {
  dispatch(pause());
  dispatch(load(song, playlist));
  dispatch(play());
}

export const toggle = () => (dispatch, getState) => {
    console.log(getState);
    const {isPlaying} = getState();
    if (isPlaying) dispatch(pause());
    else dispatch(play());
}

export const toggleOne = (song, list) => (dispatch, getState) =>{
  const {currentSong} = getState();
  if (song.id !== currentSong.id)
    dispatch(startSong(song, playlist));
  else dispatch(toggle());
}

export const next = () => (dispatch, getState) => {
  dispatch(startSong(...skip(1, getState())));
}

export const prev = () => (dispatch, getState) => {
  dispatch(startSong(...skip(-1, getState())));
}
