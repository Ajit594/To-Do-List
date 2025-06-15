import { createStore, combineReducers } from 'redux';

const initialAuthState = {
  isAuthenticated: false,
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;