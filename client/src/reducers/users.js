





import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { register } from '../actions/usersAction';

const initialState = {
  isLoading: false,
  data: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder///////////////////////////////////////GET POST
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
      })///////////////////////////////////////CREATE POST
    //   .addCase(createPosts.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(createPosts.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.data.push(action.payload);
    //   })
    //   .addCase(createPosts.rejected, (state, action) => {
    //     state.isLoading = false;
    //   })///////////////////////////////////////UPDATE POST
    //   .addCase(updatePost.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(updatePost.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.data = state.data.map((users) =>
    //     users._id === action.payload.id ? action.payload : users
    //     );
    //   })
    //   .addCase(updatePost.rejected, (state, action) => {
    //     state.isLoading = false;
    //   })///////////////////////////////////////DELETE POST
    //   .addCase(deletePost.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(deletePost.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.data = state.data.filter((users) =>
    //     users._id !== action.payload.id 
    //     );
    //   })
    //   .addCase(deletePost.rejected, (state, action) => {
    //     state.isLoading = false;
    //   })///////////////////////////////////////LIKE POST
    //   .addCase(likePost.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(likePost.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.data = state.data.map((users) =>
    //     users._id === action.payload.id ? action.payload : users
    //     );
    //   })
    //   .addCase(likePost.rejected, (state, action) => {
    //     state.isLoading = false;
    //   })
    //   ;
  },
});



export const { reducer: usersReducer } = usersSlice; // Export the reducer as usersReducer
export default usersSlice.reducer;














