import axios from 'axios';
import codes from '../utils/countryCodes';

import {
  GET_COUNTRIES, GET_COUNTRY_INFO, GET_GLOBAL_COVID_INFO,
  INFO_LOADING, INFO_FETCH_SUCCESS, INFO_FETCH_FAILURE,
} from './actionTypes';

const BASE_URL_WORLD = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php';
const API_KEY = process.env.REACT_APP_API_KEY;

const BASE_URL_COUNTRY = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php';

export const covidInfoLoading = () => ({
  type: INFO_LOADING, // tell reducer that user is loading
});

export const covidInfoFetchSuccess = info => ({
  type: INFO_FETCH_SUCCESS,
  payload: info,
});
export const covidInfoFetchFailure = error => ({
  type: INFO_FETCH_FAILURE,
  payload: error,
});

export const loadGlobalStats = data => ({
  type: GET_GLOBAL_COVID_INFO,
  payload: data,
});

export const loadAffectedCountries = countries => ({
  type: GET_COUNTRIES,
  payload: countries,
});

export const loadCountryStats = stats => ({
  type: GET_COUNTRY_INFO,
  payload: stats,
});

export const getGlobalStats = () => async dispatch => {
  try {
    dispatch(covidInfoLoading());

    const result = await axios.get(`${BASE_URL_WORLD}`, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
      },

    });

    const response = result.data;
    // console.log(users);
    dispatch(loadGlobalStats(response));
  } catch (e) {
    dispatch(covidInfoFetchFailure(e));
  }
};

export const getAffectedCountries = () => async dispatch => {
  try {
    dispatch(covidInfoLoading());

    const result = await axios.get(`${BASE_URL_COUNTRY}`, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
      },

    });

    const response = result.data.countries_stat.map(country => country.country_name).sort();
    // console.log(users);
    dispatch(loadAffectedCountries(response));
  } catch (e) {
    dispatch(covidInfoFetchFailure(e));
  }
};

export const getCountryStats = countryName => dispatch => {
  axios.get(`${BASE_URL_COUNTRY}`, {
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
    },

  })
    .then(response => {
      if (countryName) {
        let countryStats = response.data.countries_stat;
        countryStats = countryStats.filter(country => country.country_name === countryName);
        if (countryStats.length > 0) {
          let countryCode = Object.keys(codes).filter(key => codes[key] === countryName);
          if (countryName === 'Channel Islands' || countryName === 'Diamond Princess') { countryCode = 'GB'; }
          countryStats['0'].code = countryCode;
        } else {
          countryStats = undefined;
        }
        dispatch(loadCountryStats(countryStats));
      }
    });
};
