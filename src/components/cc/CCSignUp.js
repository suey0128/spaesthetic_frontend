import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


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

export default function CCSignUp() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SET_IS_ON_LANDING_PAGE", playload: false})
  },[])

  //all the states for the control form
  const [username, usernameSetter] = useState("")
  const [firstName, firstNameSetter] = useState("")
  const [lastName, lastNameSetter] = useState("")
  const [email, emailSetter] = useState("")
  const [igName, igNameSetter] = useState("")
  const [following, followingSetter] = useState("")
  const [password, passwordSetter] = useState("")
  const [passwordConfirmation, passwordConfirmationSetter] = useState("")
  const [igPermission, igPermissionSetter] = useState(true)
  const igNameInUrl = igName.slice(1)

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
      content_creator: {
        first_name: firstName,
        last_name: lastName,
        gender: "",
        instagram_username: igName,
        instagram_url: `https://www.instagram.com/${igNameInUrl}`,
        instagram_follower: following,
        instagram_female_follower_ratio: "",
        instagram_top1_follow_location: "",
        instagram_connection_permission: igPermission,
        ave_rate_per_campaign: "",
        paypal_account: "",
        profile_pic: "https://via.placeholder.com/280x350.png",
        website: ""
      }
    }
    // const res = await fetch(`https://spaesthetic.herokuapp.com/users`,{
      const res = await fetch(`/users`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpUser)
    });
    const userData = await res.json();
    if(res.ok){
        dispatch({ type: "SET_CURRENT_USER", playload: userData})
        history.push('/ccprofile')
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
          Content Creator Sign up
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

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="firstName"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={(e)=>firstNameSetter(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="lastName"
                name="lastName"
                autoComplete="lastName"
                value={lastName}
                onChange={(e)=>lastNameSetter(e.target.value)}
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
                id="igName"
                label="Instagram Username, ex. my_username"
                name="igName"
                autoComplete="igName"
                value={igName}
                onChange={(e)=>igNameSetter(e.target.value)}
              />
            </Grid>              

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="following"
                label="Number of follower"
                name="following"
                autoComplete="following"
                value={following}
                onChange={(e)=>followingSetter(e.target.value)}
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

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree to connect my Instagram account to Spaesthetic"
                checked={igPermission}
                onChange={(e)=>igPermissionSetter(e.target.checked)}
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
