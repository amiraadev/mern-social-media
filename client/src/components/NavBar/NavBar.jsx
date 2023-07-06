import React from 'react'
import useStyles from './navbarStyle'
import memories from '../../assets/images/memories.png'
import {Link} from 'react-router-dom'

import {AppBar,Typography,Toolbar,Avatar,Button} from '@material-ui/core'

function NavBar() {

    const classes = useStyles();
    const user = null;

  return (
       <AppBar className={classes.appBar} style={{flexDirection:"row"}} position="static" color="inherit">

  
         <div className={classes.brandContainer}>
          <Typography component={Link} to="/" className={classes.heading} variant="h3" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="icon" height="60" />
        </div>
        
        <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
              <Button variant="contained" className={classes.logout} color="secondary" onClick={()=>{}}>Logout</Button>
            </div>
          ) : (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
          )}
        </Toolbar>  
    </AppBar>
  )
}

export default NavBar
