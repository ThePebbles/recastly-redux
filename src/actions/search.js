import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  //should return a function
  //should take a query parameter
  //the key will be youtube API key
  //should make a call to the youtube API
  //should dispatch changeVideo
  //should dispatch changeVideoList
  return (dispatch) => {
    return searchYouTube({YOUTUBE_API_KEY, q}, (data) => {
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  };
};

export default handleVideoSearch;
