





import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPosts ,createPosts} from '../actions/postsActions';

const initialState = {
  count: 0,
  isLoading: false,
  data: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});



export const { reducer: postsReducer } = postSlice; // Export the reducer as postsReducer
export default postSlice.reducer;














