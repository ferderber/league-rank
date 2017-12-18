import React from 'react';
import reduxThunk from 'redux-thunk'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import leagueRank from './reducers';
import {fetchSummoners} from './actions';

let store = createStore(leagueRank, applyMiddleware(reduxThunk));

store.dispatch(fetchSummoners());

ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));

registerServiceWorker();
