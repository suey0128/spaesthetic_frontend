import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';

import { useState, useEffect} from 'react'
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function BusinessProfileEditForm() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.userReducer.currentUser);

  //local state for control form
  const [username, usernameSetter] = useState("")
  const [email, emailSetter] = useState("")
  const [businessName, businessNameSetter] = useState("")
  const [businessType, businessTypeSetter] = useState("")
  const [website, websiteSetter] = useState("")
  const [description, descriptionSetter] = useState("")
  const [address,addressSetter] = useState("")
  const [city, citySetter] = useState("")
  const [state, stateSetter] = useState("")
  const [zip, zipSetter] = useState("")
  const [country, countrySetter] = useState("")


  useEffect(() => {
    if (currentUser)  {
    usernameSetter(currentUser.username)
    emailSetter(currentUser.email)
    businessNameSetter(currentUser.platform_user.name)
    businessTypeSetter(currentUser.platform_user.business_type)
    websiteSetter(currentUser.platform_user.website)
    addressSetter(currentUser.platform_user.address)
    citySetter(currentUser.platform_user.city)
    stateSetter(currentUser.platform_user.state)
    zipSetter(currentUser.platform_user.zip)
    countrySetter(currentUser.platform_user.country)
    descriptionSetter(currentUser.platform_user.description)
    }
  }, [currentUser])

  const handleProfileEditSubmit = (e) => {
    e.preventDefault();
    //create new profile instance.
    const updatedProfile = { 
      user: {
        username,
        email
      },
      business: {
        name: businessName,
        business_type: businessType,
        website,
        description,
        address,
        city,
        state,
        zip,
        country
      }
    }
    // console.log(updatedProfile)
    async function updateProfile() {
      const res = await fetch(`/users/${currentUser.id}`,{
          method: 'PATCH',
          // credentials: "include",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedProfile)
      });
      const userData = await res.json();
      if(res.ok){
          console.log(userData)
          dispatch({ type: "SET_CURRENT_USER", playload: userData})
          history.push('/businessprofile')
      } else {
          alert(userData.errors)
      }
    }
    updateProfile();
  }



  return (

    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Edit Profile Info
        </Typography>


        <form className={classes.form} noValidate onSubmit={handleProfileEditSubmit}>

        <Typography component="h6" >Account Info</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e)=>usernameSetter(e.target.value)}
              />
            </Grid>        
          <Grid item xs={12} sm={6}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e)=>emailSetter(e.target.value)}
            />
          </Grid>      
        </Grid>
        <br></br>

        {/* <Typography component="h6" >Payment Info</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="paypalAccount"
              label="Paypal Account"
              name="paypalAccount"
              autoComplete="paypalAccount"
              autoFocus
              value={username}
              onChange={(e)=>usernameSetter(e.target.value)}
            />
          </Grid>
        </Grid>
        <br></br> */}

        <Typography component="h6" >About Your Business</Typography>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={3}>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="businessName"
                label="Business Name"
                name="businessName"
                autoComplete="businessName"
                autoFocus
                value={businessName}
                onChange={(e)=>businessNameSetter(e.target.value)}
                />
            </Grid>        
            <Grid item xs={12} sm={3}>
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="businessType"
                label="Business Type"
                name="businessType"
                autoComplete="businessType"
                autoFocus
                value={businessType}
                onChange={(e)=>businessTypeSetter(e.target.value)}
                />
            </Grid>  
            <Grid item xs={12} sm={6}>
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="website"
                label="Website"
                name="website"
                autoComplete="website"
                autoFocus
                value={website}
                onChange={(e)=>websiteSetter(e.target.value)}
                />
            </Grid>    

            <Grid item xs={12} >
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                autoFocus
                value={address}
                onChange={(e)=>addressSetter(e.target.value)}
                />
            </Grid>     

            <Grid item xs={12} sm={3}>
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="city"
                label="City"
                name="city"
                autoComplete="city"
                autoFocus
                value={city}
                onChange={(e)=>citySetter(e.target.value)}
                />
            </Grid>    

            <Grid item xs={12} sm={3}>
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="state"
                label="State"
                name="state"
                autoComplete="state"
                autoFocus
                value={state}
                onChange={(e)=>stateSetter(e.target.value)}
                />
            </Grid>    

            <Grid item xs={12} sm={3}>
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="zip"
                label="Zip"
                name="zip"
                autoComplete="zip"
                autoFocus
                value={zip}
                onChange={(e)=>zipSetter(e.target.value)}
                />
            </Grid>    

            <Grid item xs={12} sm={3}>
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="country"
                label="Country"
                name="country"
                autoComplete="country"
                autoFocus
                value={country}
                onChange={(e)=>countrySetter(e.target.value)}
                />
            </Grid>    



            <Grid item xs={12} >
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                autoFocus
                multiline
                rows={4}
                value={description}
                onChange={(e)=>descriptionSetter(e.target.value)}
                />
            </Grid>
          <br></br>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save Change
            </Button>
        </Grid>
        </form>
      </div>
    </Container>



  );
}