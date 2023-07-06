import React from 'react'
import {Container} from '@material-ui/core'
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import useStyles from './principalStyle'


function Principale({currentId,setCurrentId}) {
     const classes = useStyles();
  return (
    <Container maxWidth="lg">
         <NavBar/>
         <Container>
               <Home currentId={currentId} setCurrentId={setCurrentId} />
         </Container>
    </Container>
  )
}

export default Principale
