import React, { Component } from 'react';
import Media from './media.js';
// import './playlist.css';
import Playlist from '../../icons/components/play';

class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist
    console.log(this.props.data);
    return (
      <div className="Playlist">
        <Play />
        {
          playlist.map((item) => {
            return <Media {...item} key={item.id} />
          })
        }
      </div>
    )
  }
}

export default Playlist;
