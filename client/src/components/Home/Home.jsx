import React from 'react'
import {Grid} from '@material-ui/core'
import Form from '../Form/Form.jsx';
import Posts from '../Posts/Posts.jsx';
import { useDispatch,useSelector } from 'react-redux';

import useStyles from './homeStyle'
import NavBar from '../NavBar/NavBar.jsx';

function Home({currentId,setCurrentId}) {
    const posts = useSelector((state) => state.posts.data);

  const classes = useStyles();

  return (
    <>
       <NavBar/>
        <Grid container className={classes.mainContainer} justifyContent='space-between' alignItems='stretch'>
            <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form  currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
        </Grid>
    </>
  )
}

export default Home
