import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import promise from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware(promise));