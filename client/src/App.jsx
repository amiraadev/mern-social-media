import './App.css';


import { useDispatch,useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts } from './actions/postsActions';
import {Container} from '@material-ui/core'


import useStyles from './styles'
//Components

import Principal from './components/Principal/Principal';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

function App() {
   const [currentId,setCurrentId] = useState(null)
   const classes = useStyles();
   const posts = useSelector((state) => state.posts.data);
   
   const dispach = useDispatch()
     useEffect(() => {
      dispach(getPosts())
     },[dispach])
     // },[currentId,dispach])

  return (
<Router>

    <Container maxWidth="lg">
          <NavBar/>
          <Routes>
               <Route path='/' element={<Home currentId={currentId} setCurrentId={setCurrentId} />} />
               <Route path='/auth' element={<Auth/>} />
          </Routes>
   </Container>


         
</Router>
  );
}

export default App;
