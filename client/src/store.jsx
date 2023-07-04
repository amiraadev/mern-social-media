import {configureStore } from '@reduxjs/toolkit'
import postreducer from './reducers/reducer';




const store = configureStore ({
    reducer: {
        posts : postreducer
    }
})

export default store ;