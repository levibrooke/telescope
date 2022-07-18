import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export const store = (initialState = {}) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
  }
  else {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
  }
}
