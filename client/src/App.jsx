import './App.css';


  import Form from './components/Form/Form.jsx';
  import Posts from './components/Posts/Posts.jsx';

  import {Container,AppBar,Typography,Grid} from '@material-ui/core'
  import memories from './assets/images/memories.png'

  import useStyles from './styles'
import { useSelector } from 'react-redux';

  

function App() {
   const classes = useStyles();
   const test = useSelector((state) => state.users);


console.log(test);
  return (
    <Container maxWidth="lg">
        <AppBar className={classes.appBar} position='static' color='inherit'>
           <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
           <img  className={classes.image} src={memories} alt='memories' height="60"></img>
        </AppBar> 
         <Container>
            <Grid container justifyContent='space-between' alignItems='stretch'>
                 <Grid item xs={12} sm={7}>
                      <Posts/>
                 </Grid>
                 <Grid item xs={12} sm={4}>
                      <Form/>
                 </Grid>
            </Grid>
         </Container>
    </Container>
  );
}

export default App;
