import React from 'react'
import Post from './post/Post';
import useStyles from './postsStyle.js'

function Posts() {
  const classes = useStyles();
  return (
    <div>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Posts
