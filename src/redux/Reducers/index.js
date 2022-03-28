import { combineReducers } from 'redux';
import countReducer from "./countReducuere"
const rootReducer = combineReducers({
    countReducer: countReducer
});

export default rootReducer;