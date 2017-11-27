import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer'
import { Provider } from 'react-redux'
import thunk from 'react-thunk'

const compseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const store = createStore(reducer,
  compseEnhancer( applyMiddleware(logger))
  );
console.log(store.getState());

ReactDOM.render(<Provider store={store}>
  <App/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
