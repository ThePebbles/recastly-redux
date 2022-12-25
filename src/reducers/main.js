import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

// var rootReducer = ({videoList, currentVideo}, action) => {

//   var reducers = combineReducers({
//     currentVideo: currentVideo,
//     videoList: videoList
//   });
//   return reducers;
// };

var rootReducer = combineReducers({
  currentVideo: currentVideo,
  videoList: videoList
//add the rest of the reducers
});

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
