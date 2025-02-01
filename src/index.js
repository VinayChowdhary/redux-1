import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore as  createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

//initial state
const defaultState = 0;

//reducer
const balReducer = (state=defaultState,action)=>{
  console.log("reducer",action);
  switch(action.type){
    case 'DEPOSIT' : return state+100;
    case 'WITHDRAW' : return state-100;
    default : return state;
  }
}

//creating store
var store = createStore(balReducer,composeWithDevTools());

console.log(store.getState());
store.dispatch({type:'DEPOSIT'});
console.log(store.getState());
store.dispatch({type:'DEPOSIT'});
console.log(store.getState());
store.dispatch({type:'WITHDRAW'});
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
