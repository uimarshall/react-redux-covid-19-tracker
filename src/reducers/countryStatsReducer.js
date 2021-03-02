import { GET_COUNTRY_INFO } from '../actions/actionTypes';

const defaultState = [];

const countryStatsReducer = (state = defaultState, action) => {
  if (action.type === GET_COUNTRY_INFO) {
    if (!action.payload) {
      return ['not found'];
    } if (action.payload.length > 0) {
      return Object.values(action.payload['0']);
    }
  }
  return state;
};

export default countryStatsReducer;
