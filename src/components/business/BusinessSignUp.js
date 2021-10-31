import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import fetchPort from '../fetchPort';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function BusinessSignUp() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SET_IS_ON_LANDING_PAGE", playload: false})
  },[])

  //all the states for the control form
  const [username, usernameSetter] = useState("")
  const [email, emailSetter] = useState("")
  const [businessName, businessNameSetter] = useState("")
  const [password, passwordSetter] = useState("")
  const [passwordConfirmation, passwordConfirmationSetter] = useState("")

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  
  async function handleSubmit(e){
    e.preventDefault()
    //create new user instance.
    const signUpUser = { 
      user: {
        username,
        password,
        password_confirmation: passwordConfirmation,
        email
      },
      business: {
        name: businessName,
        business_type: "",
        profile_pic: "https://via.placeholder.com/280x350.png",
        description: "",
        address: "",
        city: "",
        state: "",
        zip: "00000",
        country: "",
        website: ""
      }
    }
      const res = await fetch(`${fetchPort}/users`,{
        method: 'POST',
        // credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpUser)
    });
    const userData = await res.json();
    if(res.ok){
        dispatch({ type: "SET_CURRENT_USER", playload: userData})
        history.push('/businessprofile')
    } else {
        alert(userData.errors)
    }
};


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon style={{ fill: "#f4e7dc" }}/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Business Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(e)=>usernameSetter(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e)=>emailSetter(e.target.value)}
              />
            </Grid>   

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="businessName"
                label="Business Name"
                name="businessName"
                autoComplete="businessName"
                value={businessName}
                onChange={(e)=>businessNameSetter(e.target.value)}
              />
            </Grid>              

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e)=>passwordSetter(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordConfirmation"
                label="Password Confirmation"
                type="password"
                id="passwordConfirmation"
                autoComplete="current-password"
                value={passwordConfirmation}
                onChange={(e)=>passwordConfirmationSetter(e.target.value)}
              />
            </Grid>

          </Grid>
          
          <button
            type="submit"
            style={{ width: '100%', marginTop: '15px'}}
          >
            Sign Up
          </button>
          
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
