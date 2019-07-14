import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import currentUserReducer from './reducers/session.js';
import userFormsReducer from './reducers/accountForms.js';
import recipeFormReducer from './reducers/recipeForm.js';
import saladBowlsReducer from './reducers/saladBowls.js';
import mealTypeReducer from './reducers/mealType.js';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  session: currentUserReducer,
  userForms: userFormsReducer,
  mealType: mealTypeReducer,
  saladBowls: saladBowlsReducer,
  recipeForm: recipeFormReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
