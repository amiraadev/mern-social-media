import React, { useState } from 'react'
import {Avatar,Button,Paper,Grid,Typography,Container, TextField} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './authStyle'
import Input from './Input'

function Auth() {

    const classes = useStyles();
    const [isSignup, setisSignup] = useState(false)
    const handleSubmit = null;
    const [showPassword, setshowPassword] = useState(false)
    function handleChange() {
        
    }
    const handleShowPassword = () => setshowPassword((prevShowPassword) => !prevShowPassword)
    const switchMode = () => {
        setisSignup((prevIsSignup) => !prevIsSignup)
        handleShowPassword(false)
    }
 
  return (
    <Container component="main" maxWidth="xs"> 
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography className={classes.heading} variant="h5" >{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
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
