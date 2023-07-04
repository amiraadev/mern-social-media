
import { createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../api'
import axios from 'axios'

const url = process.env.REACT_APP_HOST_NAME+"posts"


export const getPostsAction = createAsyncThunk("posts/getPosts",
    async () =>{
        try {
            const response = await axios(url)
            return response.data
        } catch (error) {
            throw error;
        }
    }
)
    
  



