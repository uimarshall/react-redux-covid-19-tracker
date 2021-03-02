import { combineReducers } from 'redux';
import countryStatsReducer from './countryStatsReducer';
import countriesReducer from './countriesReducer';
import globalStatsReducer from './globalStatsReducer';

export default combineReducers({
  countries: countriesReducer,
  globalStats: globalStatsReducer,
  countryStats: countryStatsReducer,

});
