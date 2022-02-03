import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App3_hw from './App3_hw';
import App4 from './App4';
import App4_hw from './App4_hw';
import App5 from './App5';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App1 /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    {/* <App3_hw /> */}
    {/* <App4 /> */}
    {/* <App4_hw /> */}
        <App5 />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
