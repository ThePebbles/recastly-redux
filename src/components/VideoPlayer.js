import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ReactReduxContext } from 'react-redux';


var VideoPlayer = ({video}) => {
  // const { store } = useContext(ReactReduxContext);
  // console.log('Look at me: ', ReactReduxContext);
  return (
    !video
      ? <div className="video-player">Please wait...</div>
      : <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{video.snippet.title}</h3>
          <div>{video.snippet.description}</div>
        </div>
      </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoPlayer;
