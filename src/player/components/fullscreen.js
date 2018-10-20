import React from 'react';
import FullScreenIcon from '../../icons/components/fullscreen';
import './fullscreen.css';

const FullScreen = (props) => {
    <div 
      className="Fullscreen"
      onClick={props.handleFullScreenClick}
    >
    <FullScreenIcon
      size={25}
      color="white"
    />
  </div>
}

export default FullScreen;