import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
// import * as products from './products';
import 'babel-polyfill';

const rootNode = document.querySelector('#root');

ReactDOM.render(<App />, rootNode);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// products.unregister();
