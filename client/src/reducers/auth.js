





import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPosts ,createPosts,updatePost,deletePost,likePost} from '../actions/postsActions';
import { login, register } from '../actions/usersAction';

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
            },
  extraReducers: (builder) => {
    builder//**REGISTER */
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        // localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
        return {
          ...state,
          authData: action.payload,
        };
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
      })//**LOGIN */
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        // localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
        return {
          ...state,
          authData: action.payload,
        };
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
      })
    }
});



export const { logPayload ,logOut} = authSlice.actions;
export const { reducer: postsReducer } = authSlice; // Export the reducer as postsReducer
export default authSlice.reducer;














