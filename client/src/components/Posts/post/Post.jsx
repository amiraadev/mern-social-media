import React from 'react'
import useStyles from './postStyle.js'
import { useDispatch,useSelector } from 'react-redux';
import {Card,CardActions,CardContent,CardMedia,Button,Typography,} from '@material-ui/core'
import moment from 'moment'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizonIcon from '@material-ui/icons/MoreHoriz'

function Post({post}) {
  // const posts = useSelector((state)=>state.posts)
  const classes = useStyles();
  return (
   <Card className={classes.card}>
      <CardMedia className={classes.card} image={Post.selectedFile} title={Post.title}/>
      <div className={classes.overlay} >
        <Typography variant='h6'>{Post.creator}</Typography>
        <Typography variant='body2'>{moment(Post.createdAt).fromNow}</Typography>
      </div>
   </Card>
  )
}

export default Post
