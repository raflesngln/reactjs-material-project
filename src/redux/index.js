
/* REDUX from scratch   */
import {combineReducers} from 'redux'
import biodataReducer from './reducer/biodataReducer'
import userReducer from './reducer/userReducer'
// import { composeWithDevTools } from 'redux-devtools-extension';

/*  COMBINE REDDUCER MULTY*/
const allReducer=combineReducers({bioadata:biodataReducer,userLogin:userReducer})
// const allReducer=(state = {}, action)=> {
//     return {
//         bioadata: biodataReducer(state.biodataReducer, action),
//         userLogin: userReducer(state.userReducer, action)
//     };
//   }

/* Create store is store data to redux */
// const store=createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// const store=createStore(allReducer,composeWithDevTools())
// add actension to debug redux in chromes browser

// console.log(store.getState())  //after update state
/* END REDUX from scratch   */

export default allReducer