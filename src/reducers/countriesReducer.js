import { GET_COUNTRIES } from '../actions/actionTypes';

const initialState = ['Loading...'];

// const defaultState = ['Loading...'];

const countriesReducer = (state = initialState, action) => {
  if (action.type === GET_COUNTRIES) {
    return action.payload;
  }
  return state;
};

export default countriesReducer;
