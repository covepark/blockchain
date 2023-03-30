import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Course from './JSX/4-2. Course';
import Time from './Element/5-1. TIme';
import MovieList from './6. movies/6-2. MovieList';
import TestComp from './8. LifeCycle/8-1. TestComp';
import CalculateComp from './11. Hook/11-2. CalculateComp';
import Mybutton from './13. EventHandler/13-1. MyButton';
import Index from './14. Header/14-2. Index';
import MemberList from './15. List/15-1. MemberList';
import LightDarkMode from './16. Context/16-2. LightDarkMode';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Course />
//   </React.StrictMode>
// );

// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Time />
//     </React.StrictMode>,
//     document.getElementById('root')
//   )
// }, 1000);

// ReactDOM.render(
//      <React.StrictMode>
//        <MovieList />
//      </React.StrictMode>,
//      document.getElementById('root')
// )

// ReactDOM.render(
//   <React.StrictMode>
//     <TestComp />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <React.StrictMode>
//     <CalculateComp />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <React.StrictMode>
//     <Mybutton />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <React.StrictMode>
//     <Index />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <React.StrictMode>
//     <MemberList />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

ReactDOM.render(
  <React.StrictMode>
    <LightDarkMode />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
