import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { COUNTRY_DETAILS, HOME, NOT_FOUND } from './constants/routes';
import './App.css';
import Spinner from './utils/Spinner';
import Navbar from './components/Navbar';
import GlobalStats from './container/GlobalStats';
import CountryFilter from './container/CountryFilter';
import { getAffectedCountries, getGlobalStats } from './actions/covidInfoAction';

const Home = lazy(() => import('./components/Home'));
const CountryDetails = lazy(() => import('./container/CountryDetails'));
const ErrorPage = lazy(() => import('./components/ErrorPage'));

function App({
  getGlobalStats, getCountries, globalStats, countries,
}) {
  console.log(countries);
  console.log(globalStats);
  return (
    <div className="App">
      <Router>
        <div>
          <h1>CoronaVirus(COVID-19) GLOBAL STATISTICS</h1>
          {/* <img id={styles.thumbnail} src={image} alt="covid19thumbnail" /> */}
          <GlobalStats getGlobalStats={getGlobalStats} globalStats={globalStats} />
          <CountryFilter getCountries={getCountries} countries={countries} />
        </div>
        <Navbar />
        <Switch>
          <Route exact path={HOME}>
            <Suspense fallback={Spinner()}>
              <Home />
            </Suspense>
          </Route>
          <Route path={COUNTRY_DETAILS}>
            <Suspense fallback={Spinner()}>
              <CountryDetails />
            </Suspense>
          </Route>
          <Route path={NOT_FOUND}>
            <Suspense fallback={Spinner()}>
              <ErrorPage />
            </Suspense>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

App.propTypes = {
  getGlobalStats: PropTypes.func.isRequired,
  getCountries: PropTypes.func.isRequired,
  globalStats: PropTypes.instanceOf(Object).isRequired,
  countries: PropTypes.instanceOf(Array).isRequired,
};
const mapStatetoProps = state => ({
  countries: state.countries,
  globalStats: state.globalStats,
});

const mapDispatchToProps = dispatch => ({
  getCountries: () => dispatch(getAffectedCountries()),
  getGlobalStats: () => dispatch(getGlobalStats()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);

// export default App;
