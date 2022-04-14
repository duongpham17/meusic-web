import {combineReducers} from 'redux';
import utilsReducers from './utilsReducers';
import alertReducers from './alertReducers';
import authReducers from './authReducers';
import userReducers from './userReducers';
import roomReducers from './roomReducers';
import uploadReducers from './uploadReducers';
import playingReducers from './playingReducers';
import previewPlaylistReducers from './previewPlaylistReducers';
import savedPlaylistReducers from './savedPlaylistReducers'
import customisePlaylistReducers from './customisePlaylistReducers';
import othersPlaylistReducers from './othersPlaylistReducers';

export default combineReducers({
    alertReducers,
    utilsReducers,
    authReducers,
    userReducers,
    uploadReducers,
    playingReducers,
    roomReducers,
    
    previewPlaylistReducers,
    savedPlaylistReducers,
    customisePlaylistReducers,
    othersPlaylistReducers
});