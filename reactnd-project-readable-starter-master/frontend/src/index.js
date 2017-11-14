import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer'
import { thunk } from 'redux-thunk'
import { Provider } from 'react-redux'

const compseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
}

const store = createStore(reducer,
  compseEnhancer( applyMiddleware(logger))
  );
console.log(store.getState());

ReactDOM.render(<Provider store={store}>
  <App/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
