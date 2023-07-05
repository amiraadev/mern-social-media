
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
   return(response.data);
  //  console.log(response);
  } catch (error) {
    throw error;
  }
});
    
export const updatePost = createAsyncThunk('posts/updatePosts', async (updatedPost) => {
  try {
    const { headers, ...postData } = updatedPost; // Exclude headers from the payload
    const response = await axios.patch(`${url}/${updatedPost.id}`, postData);
    return {...response.data , id:updatedPost.id}; 
  } catch (error) {
    throw error;
  }
});
  
    
export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  try {
    // const { headers, ...postData } = updatedPost; // Exclude headers from the payload
    const response = await axios.delete(`${url}/${id}`);
    return {...response.data , id:id}; 
  } catch (error) {
    throw error;
  }
});
  



