import { GET_COUNTRY_INFO } from '../actions/actionTypes';

const defaultState = [];

const countryStatsReducer = (state = defaultState, action) => {
  if (action.type === GET_COUNTRY_INFO) {
    if (!action.countryStats) {
      return ['not found'];
    } if (action.countryStats.length > 0) {
      return Object.values(action.countryStats['0']);
    }
  }
  return state;
};

export default countryStatsReducer;
