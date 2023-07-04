import axios from 'axios'

const url = process.env.REACT_APP_HOST_NAME


export const fetchPosts = () => axios.get(url)