import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App/App';
//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
//sagas
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer/_root.reducer';
import rootSaga from './saga/_root.saga';

//saga middleware
const sagaMiddleware = createSagaMiddleware();

//create store for all components
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger),
);
export default store

//Saga: watcher saga into our sagaMiddleware
sagaMiddleware.run( rootSaga );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);