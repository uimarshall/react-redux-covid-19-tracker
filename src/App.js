import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { COUNTRY_DETAILS, HOME, NOT_FOUND } from './constants/routes';
import './App.css';
import Spinner from './utils/Spinner';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./components/Home'));
const CountryDetails = lazy(() => import('./container/CountryDetails'));
const ErrorPage = lazy(() => import('./components/ErrorPage'));


function App() {
 
  return (
    <div className="App">
      <Router>
        <Navbar/>
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

export default App;
