import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 5. This imports bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
//6. You may think this will not work as it is javascript but it is actually a webpack that adds in the css
//7. If you start the app you should see the font is now a bootstrap font: npm start
//8. Done

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
