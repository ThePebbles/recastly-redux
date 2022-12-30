import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
//states: videos (an array in app), currentVideo (set to null, maybe object?, in app), value (set to quotes, in search)

var store = createStore(
  rootReducer,
  {videoList: exampleVideoData, currentVideo: exampleVideoData[0]},
  applyMiddleware(thunk)
);
  //const store = createStore(rootReducer, storeInitialState);
  //ask seir

export default store;