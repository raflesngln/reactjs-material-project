import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {Provider} from "react-redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducer from './redux/index'

//redux persisten
const persistConfig = {
  key: 'root',
  storage: storage,
  // whitelist: ['loginReducer'] // which reducer want to store
}
const MyReducer = persistReducer(persistConfig, allReducer);
const middleware = applyMiddleware(thunk);

const storeRedux = createStore(MyReducer, composeWithDevTools(middleware));
const persistor = persistStore(storeRedux);
export { persistor, storeRedux };

console.log(storeRedux.getState())  //after update state
const MyApp=()=>{
  return(
      <>
      <Provider store={storeRedux}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
      </>
  );
}


ReactDOM.render(<MyApp />, document.getElementById("root"));
