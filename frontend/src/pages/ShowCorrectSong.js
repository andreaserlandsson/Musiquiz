import React, { Component } from 'react';
import Scores from '../components/Scores'
import Track from '../components/Track'

class ShowCorrectSong extends Component {
  render() {
    const track = this.props.correctSong
    return (
      <div>
        <h1>{this.props.correctSongTimer}</h1>
        <h2>Correct song was</h2>
        <div>
          <Track track={track}/> 
          <Scores score={this.props.score} nickname={this.props.nickname} scoreUpdates={this.props.scoreUpdates}/>
        </div>
      </div>
    );
  }
}

export default ShowCorrectSong;