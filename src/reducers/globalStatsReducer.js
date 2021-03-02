import { GET_GLOBAL_COVID_INFO } from '../actions/actionTypes';

const defaultState = ['Loading...'];

const globalStatsReducer = (state = defaultState, action) => {
  if (action.type === GET_GLOBAL_COVID_INFO) {
    return action.payload;
  }
  return state;
};

export default globalStatsReducer;
