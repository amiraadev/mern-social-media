





import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPosts ,createPosts,updatePost,deletePost,likePost} from '../actions/postsActions';

const initialState = {
  isLoading: false,
  // authData: {},
  authData: [],
};





const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logPayload: (state, action) => {
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
      return {
        ...state,
        authData: action.payload,
      };
       },
    logOut: (state) => {
      localStorage.clear();
      // return {
      //   ...state,
      //   authData: null,
      // };
    },
  }
});



export const { logPayload ,logOut} = authSlice.actions;
export const { reducer: postsReducer } = authSlice; // Export the reducer as postsReducer
export default authSlice.reducer;














