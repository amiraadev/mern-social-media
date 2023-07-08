
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate, useNavigationType } from 'react-router';
const url = process.env.REACT_APP_HOST_NAME + 'users/';


export const register = createAsyncThunk('users/register', async (newUser) => {
  try {
    const response = await axios.post(
            url+'register',
            newUser.userData, {
            headers:{"Content-Type":'application/json'},
            });
            // console.log(response.data);
            localStorage.setItem('profile', JSON.stringify({...response.data}));
            newUser.navigate('/');
            return(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
});


export const login = createAsyncThunk('users/login', async (registredUser) => {  
    try {
      const response = await axios.post(
              url+'login',
              registredUser.userData, {
              headers:{"Content-Type":'application/json'},
              });
               localStorage.setItem('profile', JSON.stringify({...response.data}));
               registredUser.navigate('/');
              return(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  });
  
// export const createPosts = createAsyncThunk('posts/createPosts', async (newPost) => {
//   try {
//    const response = await axios.post(
//                     url,
//                     newPost, {
//                     headers:{"Content-Type":'application/json'},
//                    });
//    return(response.data);
//   //  console.log(response);
//   } catch (error) {
//     throw error;
//   }
// });
    
// export const updatePost = createAsyncThunk('posts/updatePosts', async (updatedPost) => {
//   try {
//     const { headers, ...postData } = updatedPost; // Exclude headers from the payload
//     const response = await axios.patch(`${url}/${updatedPost.id}`, postData);
//     return {...response.data , id:updatedPost.id}; 
//   } catch (error) {
//     throw error;
//   }
// });
  
    
// export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
//   try {
//     // const { headers, ...postData } = updatedPost; // Exclude headers from the payload
//     const response = await axios.delete(`${url}/${id}`);
//     return {...response.data , id:id}; 
//   } catch (error) {
//     throw error;
//   }
// });
   
// export const likePost = createAsyncThunk('posts/likePost', async (id) => {
//   try {
//     // const { headers, ...postData } = updatedPost; // Exclude headers from the payload
//     const response = await axios.patch(`${url}/${id}/likePost`);
//     return {...response.data , id:id}; 
//   } catch (error) {
//     throw error;
//   }
// });
  



