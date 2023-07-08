import {configureStore } from '@reduxjs/toolkit'
import postreducer from './reducers/reducer';
import authreducer from './reducers/auth';
import usersReducer from './reducers/users';




const store = configureStore ({
    reducer: {
        posts : postreducer,
        users : usersReducer,
        auth : authreducer
    }
})

export default store ;