import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App/App';
import reportWebVitals from './reportWebVitals';
//redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
//sagas
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


//watcher saga here
function* rootSaga() {
  //yield takeEvery ( type, function)
}

//sagas here - generator functions (function*)

//saga middleware
const sagaMiddleware = createSagaMiddleware();

//reducers here

//create store for all components
const store = createStore(
  combineReducers({
    //reducers go here
  }),
  //Add sagaMiddleware
  applyMiddleware(sagaMiddleware, logger),
);

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

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
