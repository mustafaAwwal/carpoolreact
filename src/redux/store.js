import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './slices/combined-reducer'
const store = configureStore({
    reducer: rootReducer
})

export default store;

