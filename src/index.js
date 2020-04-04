import React from 'react'; 
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import { createStore , combineReducers, applyMiddleware } from 'redux';
import 'tachyons';
import './index.css';
import thunkMiddleware from 'redux-thunk';
import {searchRobots,requestRobots} from './reducers';
import App from './containers/App';
import './containers/App.css';
import * as serviceWorker from './serviceWorker';

//Creating a rootReducer that will contain the reducers that we have:
const rootReducer = combineReducers({searchRobots , requestRobots});

//Creating the middleware
const logger = createLogger();

//Applting the middleware
const store = createStore(rootReducer , applyMiddleware(thunkMiddleware,logger));



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
