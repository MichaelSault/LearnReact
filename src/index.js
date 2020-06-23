//note to self --> cd to this dir --> use npm run start to view webpage in browser

//libraries needed for react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import './index.css'; //import stylesheet into js page

ReactDOM.render(<App />, document.getElementById('root'));
