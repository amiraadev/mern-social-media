import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './navbarStyle'
import memories from '../../assets/images/memories.png'
import {Link} from 'react-router-dom'

import {AppBar,Typography,Toolbar,Avatar,Button} from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../reducers/auth';


function NavBar() {
  
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const navigate = useNavigate()
  const dispatch = useDispatch()

    const handleLogout =() => {
      dispatch(logOut());
      navigate('/auth')
      setUser(null)
    }

    useEffect(() => {
     const token = user?.token;
     // JWT
     setUser(JSON.parse(localStorage.getItem('profile')))

   },[])

  return (
       <AppBar className={classes.appBar} style={{flexDirection:"row"}} position="static" color="inherit">

  
         <div className={classes.brandContainer}>
          <Typography component={Link} to="/" className={classes.heading} variant="h3" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="icon" height="60" />
        </div>
        
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user?.name} src={user?.picture}>{user?.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant="h6">{user?.name}</Typography>
              <Button variant="contained" className={classes.logout} color="secondary" onClick={()=>handleLogout()}>Logout</Button>
            </div>
          ) : (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
          )}
        </Toolbar>  
    </AppBar>
  )
}

export default NavBar
