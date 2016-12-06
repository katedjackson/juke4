import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
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
  	console.log(this.state)
  }

  componentWillUnmount(){
  	this.unsubscribe();
  }

  render() {
    return <Lyrics
      text={this.state.text}
      setArtist={this.setArtist}
      setSong={this.setSong}
      artistQuery={this.artistQuery}
      songQuery={this.songQuery}
      handleSubmit={this.handleSubmit}
    />
  }
}
