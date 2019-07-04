import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import usersReducer from './reducers/users.js';
import currentUserReducer from './reducers/currentUser.js';
import loginFormReducer from './reducers/loginForm.js';
import signupFormReducer from './reducers/signupForm.js';
import saladBowlsReducer from './reducers/salad_bowls.js';
import mealTypeReducer from './reducers/mealType.js';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  users: usersReducer,
  currentUser: currentUserReducer,
  loginForm: loginFormReducer,
  signupForm: signupFormReducer,
  mealType: mealTypeReducer,
  saladBowls: saladBowlsReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
