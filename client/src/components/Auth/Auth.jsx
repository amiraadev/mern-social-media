import React, { useEffect, useState } from 'react'
import {Avatar,Button,Paper,Grid,Typography,Container} from '@material-ui/core'

// import {GoogleLogin} from 'react-google-login'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './authStyle'
import Input from './Input'
import Icon from './Icon'
import { logPayload } from '../../reducers/auth';
import { login, register } from '../../actions/usersAction';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Auth() {
   const authParam = useSelector((state)=>state.auth)
    const classes = useStyles();

    // const [User, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const navigate = useNavigate()

    const [isSignup, setisSignup] = useState(false)
    const [showPassword, setshowPassword] = useState(false)
    const [userData, setUserData] = useState({firstName:" ",lastName:" ",email:" ",password:" ",confirmPassword:" "})

    const dispatch = useDispatch()

    function handleChange(e) {
      setUserData({...userData,[e.target.name]:e.target.value})

    }

    function handleSubmit(e) {

      if(isSignup){

        dispatch(register({userData,navigate}))
      } else {
         dispatch(login({userData :{email:userData.email,password:userData.password},navigate}))     
      }
       e.preventDefault();
    }

    const handleShowPassword = () => setshowPassword((prevShowPassword) => !prevShowPassword)

    const switchMode = () => {
        setisSignup((prevIsSignup) => !prevIsSignup)
        handleShowPassword(false)
    }


    const googleSuccess =async (res) =>{
        const token  = res?.credential;
          const decodedToken = jwt_decode(token);
          const userCredential = {picture:decodedToken.picture,name:decodedToken.name,email:decodedToken.email,token:token}
        try {
            dispatch(logPayload(userCredential))
            navigate('/')
            window.location.reload();

        } catch (error) {
            
        }
        //  console.log(decodedToken);
    }
    const googleFailure = () =>{
        console.log("Google sign in was unsuccessful . Try Again Later");
    }
 
    const googleLogout = () => {
        // Perform logout logic here
        // ...
      
        // Refresh the page
        window.location.reload();
      };
    //   console.log("parammmm",authParam);

      useEffect(() => {
         console.log(authParam);
        //  console.log(User.name);
      },[authParam,dispatch])
  return (
    <Container component="main" maxWidth="xs"> 
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography className={classes.heading} variant="h5" >{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
                <Grid container  spacing={2}>
                { isSignup && (
                        <>
                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                        <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                        </>
                   )}
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                </Grid>



                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                         { isSignup ? 'Sign Up' : 'Sign In' }
               </Button>


                <GoogleOAuthProvider  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} >
                    <GoogleLogin           
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        logout={googleLogout}
                        select_by='link'
                        />
                </GoogleOAuthProvider>
                
          
               <Grid container justifyContent='flex-end'>
                    <Grid item>
                       <Button onClick={switchMode} >
                            { isSignup ? "Already have an account? Sign In" : " Don't have an account? Sign Up" }
                       </Button>
                    </Grid>
               </Grid>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth
