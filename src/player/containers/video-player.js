import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js'
import Video from '../components/video.js';
import Title from '../components/title.js';
import PlayPause from '../components/play-pause.js';
import Timer from '../components/timer.js';
import Controls from '../components/video-player-controls.js';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title
          title="This is a video"
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer 
            duration={this.state.duration}
          />
        </Controls>
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;