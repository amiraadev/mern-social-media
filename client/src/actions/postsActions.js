
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
  
export const createPosts = createAsyncThunk('posts/createPosts', async (newPost) => {
  try {
   const response = await axios.post(
                    url,
                    newPost, {
                    headers:{"Content-Type":'application/json'},
                   });
   console.log(response);
  } catch (error) {
    throw error;
  }
});
  



