import React from 'react'
import useStyles from './postStyle.js'
import { useDispatch,useSelector } from 'react-redux';
import {Card,CardActions,CardContent,CardMedia,Button,Typography,} from '@material-ui/core'
import moment from 'moment'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizonIcon from '@material-ui/icons/MoreHoriz'
import { deletePost,likePost } from '../../../actions/postsActions.js';

function Post({post,setCurrentId}) {
   const classes = useStyles();

   const token =JSON.parse(localStorage.getItem('profile'))?.token;
   const userrMail =JSON.parse(localStorage.getItem('profile'))?.email;
   
   const dispatch = useDispatch()
   
  const handleDelete = (e) => {
    e.preventDefault() 
    dispatch(deletePost({id:post._id,token})) 
    
 }
  const handleLike = (e) => {
    e.preventDefault() 
    console.log({id:post._id,token});
    dispatch(likePost({id:post._id,token})) 
    
 }
 
 console.log(userrMail);
 console.log(post);
  return (
   <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay} >
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>  
      <div className={classes.overlay2} >
        <Button style={{color:"white"}} size='small' onClick={() => setCurrentId(post._id)}>
           <MoreHorizonIcon fontSize='medium'/>
        </Button>    
      </div> 
      <div className={classes.details} >  
           <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) =>`#${tag} ` )}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button color="primary" size='small' onClick={(e) => {handleLike(e)}}>
           <ThumbUpAltIcon fontSize='small'/>
           { post.likes?.length +" " } 
           {/* &nbsp; */}
           Like 
        </Button>
        {(userrMail == post.user) &&  <Button color="primary" size='small' onClick={(e) => {handleDelete(e)}}>
           <DeleteIcon fontSize='small'/>
           Delete 
        </Button> }
         
       </CardActions>

   </Card>
  )
}

export default Post
