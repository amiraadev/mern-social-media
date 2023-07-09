import React, { useEffect, useState } from 'react'
import useStyles from './formStyle.js'
import {TextField,Button,Typography,Paper} from '@material-ui/core'
import FileBase from 'react-file-base64'
import { createPosts ,updatePost } from '../../actions/postsActions.js'
import { useDispatch,useSelector } from 'react-redux';

function Form({currentId,setCurrentId}) {
  const post = useSelector((state)=> currentId ? state.posts.data.find((p) => p._id == currentId) : null)
  const token =JSON.parse(localStorage.getItem('profile'))?.token;
  

  
  const [postData , setPostData] = useState({
    title:" ",
    message:" ",
    creator:" ",
    tags:" ",
    selectedFile:"",
  })
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(()=>{
    if(post)
    setPostData(post)
  },[post])

  const handleSubmit = (e) => {
     e.preventDefault()  
     if(currentId){
        dispatch(updatePost({ ...postData, id: currentId,token }))
        clear()
     } else {
       dispatch(createPosts({postData,token}))
       clear()
     }
  }
  
  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  }

  useEffect(() => {
    // console.log(token);
 },[localStorage.getItem('profile')])

  return (
    <Paper className={classes.paper}>
        <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{(currentId) ? "Editing a memorie" : "Creating a memorie"}</Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator:e.target.value})}/>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title:e.target.value})}/>
            <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message:e.target.value})}/>
            <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags:e.target.value.split(',')})}/>
            <div className={classes.fileInput}>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                />
            </div>
            <Button className={classes.buttonSubmit} variant="contained" color='primary' size='large' type='submit' style={{marginBottom:"10px"}} fullWidth>Submit</Button>
            <Button  variant="contained" color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
        </form>
    </Paper>
  )
}

export default Form
