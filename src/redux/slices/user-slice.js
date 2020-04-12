import {createSlice} from'@reduxjs/toolkit';
let initialUserState = {
    role:'',
    username:'',
    picture: ''
}
const userSlices = createSlice({
    name: 'userInfo',
    initialState: initialUserState,
    reducers: {
        login(state,action){
            let {role,username,picture} = action.payload;
            return state = {...state,username:username,role:role,picture:picture}
        },
        resetUser: state => state = initialUserState
    }

})
const {reducer} = userSlices;
export const {login,resetUser} = userSlices.actions;
export default reducer;