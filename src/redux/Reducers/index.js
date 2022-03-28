import { combineReducers } from 'redux';
import countReducer from "./countReducuere";
import { songList, selectedSong } from "./songReducere"
const rootReducer = combineReducers({
    countReducer: countReducer,
    songList: songList,
    selectedSong: selectedSong
});

export default rootReducer;