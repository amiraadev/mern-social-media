





import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPosts ,createPosts,updatePost,deletePost} from '../actions/postsActions';

const initialState = {
  isLoading: false,
  data: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder///////////////////////////////////////GET POST
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
      })///////////////////////////////////////CREATE POST
      .addCase(createPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(createPosts.rejected, (state, action) => {
        state.isLoading = false;
      })///////////////////////////////////////UPDATE POST
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.map((post) =>
        post._id === action.payload.id ? action.payload : post
        );
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false;
      })///////////////////////////////////////DELETE POST
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter((post) =>
        post._id !== action.payload.id 
        );
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
      })
      ;
  },
});



export const { reducer: postsReducer } = postSlice; // Export the reducer as postsReducer
export default postSlice.reducer;














