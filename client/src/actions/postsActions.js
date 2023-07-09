
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
                    newPost,{
                      headers: {
                         Authorization: `Bearer ${newPost.token}`, 
                        'Content-Type': 'application/json',
                      },
                    });
   return(response.data);
  //  console.log(response);
  } catch (error) {
    throw error;
  }
});
    
export const updatePost = createAsyncThunk('posts/updatePosts', async (updatedPost) => {

   console.log(` ${updatedPost.token}`);
  // console.log(`${url}/${updatedPost.id}`);
  try {
    const { headers, ...postData } = updatedPost; // Exclude headers from the payload
    const response = await axios.patch(`${url}/${updatedPost.id}`, postData,{
    headers: {
       Authorization: `Bearer ${updatedPost.token}`, 
      'Content-Type': 'application/json',
    },
  });
    return {...response.data , id:updatedPost.id}; 
  } catch (error) {
    throw error;
  }
});
    
export const likePost = createAsyncThunk('posts/likePost', async (likedPost) => {

  try {
    const { headers, ...postData } = likedPost; // Exclude headers from the payload
    const response = await axios.patch(`${url}/${likedPost.id}/likePost`, postData,{
    headers: {
       Authorization: `Bearer ${likedPost.token}`, 
      'Content-Type': 'application/json',
    },
  });
    return {...response.data , id:likedPost.id}; 
  } catch (error) {
    throw error;
  }
});


export const deletePost = createAsyncThunk('posts/deletePost', async (deletedPost) => {
  console.log(deletedPost);

  try {
    const { headers, ...postData } = deletedPost; // Exclude headers from the payload
    const response = await axios.delete(`${url}/${deletedPost.id}`,{
    headers: {
       Authorization: `Bearer ${deletedPost.token}`, 
      'Content-Type': 'application/json',
    },
  });
    return {...response.data , id:deletedPost.id}; 
  } catch (error) {
    throw error;
  }
});


  
    
// export const deletePost = createAsyncThunk('posts/deletePost', async (deletedPost) => {
//   try {
//     // const { headers, ...postData } = updatedPost; // Exclude headers from the payload
//     const response = await axios.delete(`${url}/${deletedPost.id}`,{
//       headers: {
//          Authorization: `Bearer ${deletedPost.token}`, 
//         'Content-Type': 'application/json',
//       },
//     });
//     return {...response.data , id:deletedPost.id}; 
//   } catch (error) {
//     throw error;
//   }
// });

// export const likePost = createAsyncThunk('posts/likePost', async (likedPost) => {
//   // console.log(likedPost.token);
//   try {
//      const { headers, ...postData } = likedPost; // Exclude headers from the payload
//     const response = await axios.patch(`${url}/${likedPost.id}/likePost`,{
//       headers: {
//          Authorization: `Bearer ${likedPost.token}`, 
//         'Content-Type': 'application/json',
//       },
//     });
//     return {...response.data , id:likedPost.id}; 
//   } catch (error) {
//     throw error;
//   }
// });
   
  



