import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { saveToken } from '../store/middleware';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, saveToken)),
);

export default store;
