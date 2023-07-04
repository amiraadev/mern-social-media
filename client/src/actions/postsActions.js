
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = process.env.REACT_APP_HOST_NAME + 'posts';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
});
  



