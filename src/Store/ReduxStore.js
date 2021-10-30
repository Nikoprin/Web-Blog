import { createStore, combineReducers } from 'redux';
import recentNewsReducer from '../Reducers/RecentNewsReducer';

let reducers = combineReducers({
    recentNews: recentNewsReducer,
});

let store = createStore(reducers);
export default store;