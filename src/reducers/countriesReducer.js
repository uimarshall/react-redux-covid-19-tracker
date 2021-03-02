import { GET_COUNTRIES } from '../actions/actionTypes';

const initialState = ['Loading...'];

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;

    default:
      return state;
  }
};

export default countriesReducer;
