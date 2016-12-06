import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import {setLyrics} from '../action-creators/lyrics';
import axios from 'axios';

export default class LyricsContainer extends Component {

  constructor() {
  	super();

  	this.state = Object.assign({
  		artistQuery : '',
  		songQuery : ''
  	}, store.getState());

  	this.setArtist = this.setArtist.bind(this);
  	this.setSong = this.setSong.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  	this.unsubscribe = store.subscribe(() =>{
  		this.setState(store.getState());
  	})
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  setArtist(artist) {
  	this.setState({
  		artistQuery : artist
  	});
  }

   setSong(song) {
  	this.setState({
  		songQuery : song
  	});
  }

  handleSubmit() {
    if (this.state.artistQuery && this.state.songQuery) {
    	axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
        .then(response => {
          console.log('hello', response);
          const setLyricsAction = setLyrics(response.data.lyric);
          store.dispatch(setLyricsAction);
        });
    }
  }

  render() {
    console.log('this is this', this);
    console.log('this is this.state', this.state);
    return <Lyrics
      text={this.state.text}
      setArtist={this.setArtist}
      setSong={this.setSong}
      artistQuery={this.state.artistQuery}
      songQuery={this.state.songQuery}
      handleSubmit={this.handleSubmit}
    />
  }
}
