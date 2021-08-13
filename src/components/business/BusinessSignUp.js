import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
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

import { useState } from 'react'
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

export default function BusinessSignUp() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  //all the states for the control form
  const [username, usernameSetter] = useState("")
  const [email, emailSetter] = useState("")
  const [businessName, businessNameSetter] = useState("")
  const [creditCardNumber, creditCardNumberSetter] = useState("")
  const [expiry, expirySetter] = useState("")
  const [cvv, cvvSetter] = useState("")
  const [password, passwordSetter] = useState("")
  const [passwordConfirmation, passwordConfirmationSetter] = useState("")

  const currentBusiness = useSelector((state) => state.businessReducer.currentBusiness);
  
  async function handleSubmit(e){
    e.preventDefault()
    //create new user instance.
    const user = { 
        username,
        name: businessName,        
        password,
        password_confirmation: passwordConfirmation,
        email,
        business_type: "",
        logo: "",
        description: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        website: ""
    }
    console.log(user)
    const res = await fetch(`/businesses`,{
        method: 'POST',
        // credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const userData = await res.json();
    if(res.ok){
        console.log(userData)
        dispatch({ type: "SET_CURRENT_BUSINESS", playload: userData})
        history.push('/businessprofile')
    } else {
        alert(userData.errors)
    }
};

// console.log(currentBusiness)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
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

            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="businessType"
                label="business Type"
                type="businessType"
                id="businessType"
                autoComplete="businessType"
              />
            </Grid> */}

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="creditCardNumber"
                label="Credit Card Number"
                name="creditCardNumber"
                autoComplete="creditCardNumber"
                value={creditCardNumber}
                onChange={(e)=>creditCardNumberSetter(e.target.value)}
              />
            </Grid>  

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="expiry"
                name="expiry"
                variant="outlined"
                required
                fullWidth
                id="expiry"
                label="Expiry"
                autoFocus
                value={expiry}
                onChange={(e)=>expirySetter(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cvv"
                label="cvv"
                name="cvv"
                autoComplete="cvv"
                value={cvv}
                onChange={(e)=>cvvSetter(e.target.value)}
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
                type="passwordConfirmation"
                id="passwordConfirmation"
                autoComplete="passwordConfirmation"
                value={passwordConfirmation}
                onChange={(e)=>passwordConfirmationSetter(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
  );
}
