import {configureStore } from '@reduxjs/toolkit'
import firstReducer from './reducers';




const store = configureStore ({
    reducer: {
        users : firstReducer
    }
})

export default store ;