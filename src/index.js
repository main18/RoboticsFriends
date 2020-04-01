//the little robot that does the dom manipulation
import React from 'react'; 
import 'tachyons';
//we can plug and play different libraries based on 
//what screen we bundling to
//web => ReactDom , mobile => ReactNative ...
import ReactDOM from 'react-dom';
//react allows us to add css to each different component
//importing the current app's css (indes.css)
import './index.css';
import App from './containers/App';
import './containers/App.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
