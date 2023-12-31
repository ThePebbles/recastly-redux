
import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideo from './../actions/currentVideo.js';
import currentVideoReducer from './../reducers/currentVideo.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

const mapStateToProps = (state) => {
  return {
    video: state.currentVideo
  };
};


//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default connect(mapStateToProps)(VideoPlayer);
