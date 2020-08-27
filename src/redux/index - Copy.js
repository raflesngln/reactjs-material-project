
/* REDUX from scratch   */
import {createStore,combineReducers} from 'redux'
import biodataReducer from './reducer/biodataReducer'
import hobbyReducer from './reducer/hobbyReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

/*  COMBINE REDDUCER MULTY*/
// const allReducer=combineReducers({bioadata:biodataReducer,hobby:hobbyReducer})
const allReducer=(state = {}, action)=> {
    return {
        bioadata: biodataReducer(state.biodataReducer, action),
        hobby: hobbyReducer(state.hobbyReducer, action)
    };
  }

/* Create store is store data to redux */
// const store=createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store=createStore(allReducer,composeWithDevTools())
// add actension to debug redux in chromes browser

console.log(store.getState())  //after update state
/* END REDUX from scratch   */

export default store