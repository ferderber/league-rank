import React from 'react';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {Route} from 'react-router';
import {routerReducer, routerMiddleware, ConnectedRouter} from 'react-router-redux';

import api from './middleware/api';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import leagueRank from './reducers';
import Profile from './components/Profile';
import SummonerList from './containers/SummonerList';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(combineReducers({app: leagueRank, router: routerReducer}), applyMiddleware(middleware, reduxThunk, api, logger));

ReactDOM.render(
  <Provider store={store}>
  <App>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={SummonerList}/>
        <Route path="/summoner/:name" component={Profile}/>
      </div>
    </ConnectedRouter>
  </App>
</Provider>, document.getElementById('root'));

registerServiceWorker();
