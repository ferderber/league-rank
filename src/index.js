import React from 'react';
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import createHistory from 'history/createBrowserHistory'
import {Route} from 'react-router'
import {routerReducer, routerMiddleware, ConnectedRouter} from 'react-router-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import leagueRank from './reducers';
import VisibleSummonerList from './containers/VisibleSummonerList';
import Profile from './components/Profile';

const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key Also apply our middleware
// for navigating
const store = createStore(combineReducers({app: leagueRank, router: routerReducer}), applyMiddleware(middleware, reduxThunk, logger));

// <App history={history}/>
ReactDOM.render(
  <Provider store={store}>
  <App>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={VisibleSummonerList}/>
        <Route path="/summoner/:name" component={Profile}/>
      </div>
    </ConnectedRouter>
  </App>
</Provider>, document.getElementById('root'));

registerServiceWorker();
