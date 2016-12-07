import {RECEIVE_SONGS} from '../constants';
import axios from 'axios';

loadSongs (songs) {
  axios.get('/api/songs')
    .then(res => res.data)
    .then(songs => {
      dispatch({
        type: RECEIVE_SONGS,
        songs: songs
      });
    });
}
