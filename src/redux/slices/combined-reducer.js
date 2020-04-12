import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './user-slice'
import notificationReducer from './notification-slice'
import loaderReducer from './loader-slice';
export default combineReducers(
    {
        userReducer,
        notificationReducer,
        loaderReducer
    }
)