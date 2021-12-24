import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {restauarantListReducer} from './reducers/restaurantReducer'
const reducers = combineReducers({
    restaurantReducer:restauarantListReducer
})


const initialState = {};
const middleware = [thunk];

const store = createStore(reducers, initialState, applyMiddleware(...middleware));


export default store;