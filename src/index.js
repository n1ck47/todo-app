import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './Reducers/index';
import { PersistGate } from 'redux-persist/integration/react'

const store = createStore(rootReducer ,applyMiddleware());
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

