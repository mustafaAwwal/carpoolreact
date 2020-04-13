import {createSlice} from '@reduxjs/toolkit';
let initialNotificationState = {
    msg: null,
    msgtype: 'error'
}

const notificationSlice = createSlice({
    name: 'notificationInfo',
    initialState: initialNotificationState,
    reducers: {
        showNotificationSuccess(state,action){
            let {msg} = action.payload;
            return state = {...state,msg:msg,msgtype:'success'}
        },
        showNotificationError(state,action){
            let {msg} = action.payload;
            return state = {...state,msg:msg,msgtype:'error'}
        }
    }
})
const {reducer} = notificationSlice;
export const {showNotificationSuccess,showNotificationError} = notificationSlice.actions;
export default reducer;