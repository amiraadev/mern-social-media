import React from 'react'
import Post from './post/Post';
import useStyles from './postsStyle.js'
import { useDispatch,useSelector } from 'react-redux';
import {Grid,CircularProgress} from '@material-ui/core'


function Posts() {
  const classes = useStyles();
  const posts = useSelector((state)=>state.posts)
  return (
    !posts.length ? <CircularProgress/> : (
      <Grid className={classes.container} container alignItems='stretch' spacing={3}>
         {
          posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
                 <Post post={post}/>
            </Grid>
          ))
         }
      </Grid>
    )
   
  )
}

export default Posts
