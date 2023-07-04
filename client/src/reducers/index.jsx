import { createSlice } from "@reduxjs/toolkit";
import { increment } from "../actions/actions";

const initialState = {
    count: 0,
  };

const firstReducer = createSlice({
    name : "users",
    initialState,
    reducers : {
        increment
    }

})

export default firstReducer.reducer