import { createSlice } from "@reduxjs/toolkit"

let initialLoaderState = {
    visibility: false,
    position: 'center'
}

const loaderSlice = createSlice({
    name: 'loaderInfo',
    initialState: initialLoaderState,
    reducers: {
        setLoaderCenter: state=> state = {visibility: true,position:'center'},
        setLoaderStart: state=> state = {visibility:true,position:'start'},
        setLoaderEnd: state=> state = {visibility:true,position:'end'},
        setLoaderOff: state=> state = initialLoaderState
    }
})

const {reducer} = loaderSlice;
export const {actions} = loaderSlice;

export default reducer;