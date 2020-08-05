import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import itemReducer from './itemReducer/itemReducer';
const combinedReducers = combineReducers({
    itemReducer
})

const store = createStore(combinedReducers, applyMiddleware(thunk));
export default store;