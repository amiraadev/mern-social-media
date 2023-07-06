import './App.css';


  import Form from './components/Form/Form.jsx';
  import Posts from './components/Posts/Posts.jsx';

  import {Container,AppBar,Typography,Grid} from '@material-ui/core'
  import memories from './assets/images/memories.png'

  import useStyles from './styles'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts } from './actions/postsActions';



function App() {
    const [currentId,setCurrentId] = useState(null)
   const classes = useStyles();
   const posts = useSelector((state) => state.posts.data);
   
   const dispach = useDispatch()


     const handleClick = (e) => {
         dispach(getPosts())
     }


     useEffect(() => {
      dispach(getPosts())
     },[currentId,dispach])

// console.log(posts);
  return (
    <Container maxWidth="lg">
        <AppBar className={classes.appBar} position='static' color='inherit'>
           <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
           <img  className={classes.image} src={memories} alt='memories' height="60"></img>
        </AppBar> 
         <Container>
            <Grid container justifyContent='space-between' alignItems='stretch'>
                 <Grid item xs={12} sm={7}>
                      <Posts setCurrentId={setCurrentId}/>
                 </Grid>
                 <Grid item xs={12} sm={4}>
                      <Form  currentId={currentId} setCurrentId={setCurrentId}/>
                 </Grid>
            </Grid>
         </Container>
    </Container>
  );
}

export default App;
