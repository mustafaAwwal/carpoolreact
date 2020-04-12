import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './user-slice'
import notificationReducer from './notification-slice'
export default combineReducers(
    {
        userReducer,
        notificationReducer
    }
)