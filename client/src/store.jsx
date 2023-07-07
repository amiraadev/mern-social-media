import {configureStore } from '@reduxjs/toolkit'
import postreducer from './reducers/reducer';
import authreducer from './reducers/auth';




const store = configureStore ({
    reducer: {
        posts : postreducer,
        auth : authreducer
    }
})

export default store ;