import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { persistStore } from 'redux-persist';
import {createStore} from 'redux'
import reducers from './reducers/index'
import {PersistGate} from 'redux-persist/integration/react'

let store = createStore(reducers);

let persistStores = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistStores}>
       <App />
      </PersistGate>
     
    </Provider>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
