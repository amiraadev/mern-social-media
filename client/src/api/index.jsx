import axios from 'axios'

const url = process.env.REACT_APP_HOST_NAME+"posts"


export const fetchPosts =  () => {
    axios.get(url)
    .then((response) => {
       // console.log(response.data);
        return response.data
    })
    .catch((error) => {
         console.error(error);
    })
    
}

export const vble = fetchPosts() ;