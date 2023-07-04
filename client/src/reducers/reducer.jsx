import { createAction, createSlice } from "@reduxjs/toolkit";
import { getPostsAction } from "../actions/postsActions";


const initialState = {
    count: 0,
    isLoading:false,
    data:[]
  };

const postSlice = createSlice({
    name : "posts",
    initialState,
    reducers : {
        getPosts: createAction("posts/getPosts")
    }, 
    extraReducers: (builder) => {
        builder
          .addCase(getPostsAction.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getPostsAction.fulfilled, (state, action) => {
            state.isLoading = false;
            console.log(action);
            state.data = action;
          })
          .addCase(getPostsAction.rejected, (state, action) => {
            state.isLoading = false;
          });
      }

})

export const {getPosts} = postSlice.actions
export default postSlice.reducer