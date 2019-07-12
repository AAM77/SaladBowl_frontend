import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import currentUserReducer from './reducers/session.js';
import loginFormReducer from './reducers/loginForm.js';
import signupFormReducer from './reducers/signupForm.js';
import accountFormReducer from './reducers/accountForm.js';
import recipeFormReducer from './reducers/recipeForm.js';
import saladBowlsReducer from './reducers/salad_bowls.js';
import mealTypeReducer from './reducers/mealType.js';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  session: currentUserReducer,
  loginForm: loginFormReducer,
  signupForm: signupFormReducer,
  mealType: mealTypeReducer,
  saladBowls: saladBowlsReducer,
  recipeForm: recipeFormReducer,
  accountForm: accountFormReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
