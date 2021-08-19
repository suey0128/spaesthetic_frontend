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

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
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

export default function CCProfileEditForm() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  // state from the store
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  //local state for control form
  const [username, usernameSetter] = useState("")
  const [email, emailSetter] = useState(currentUser ? currentUser.email : "" )
  const [paypalAccount, paypalAccountSetter] = useState(currentUser ? currentUser.platform_user.paypal_account : "")
  const [rate, rateSetter] = useState(currentUser ? currentUser.platform_user.ave_rate_per_campaign : "")
  const [website, websiteSetter] = useState(currentUser ? currentUser.platform_user.website : "")
  const [igUrl, igUrlSetter] = useState(currentUser ? currentUser.platform_user.instagram_url : "")
  const [followerNumber, followerNumberSetter] = useState(currentUser ? currentUser.platform_user.instagram_follower : "")
  const [femaleFollowRatio, femaleFollowRatioSetter] = useState(currentUser ? currentUser.platform_user.instagram_female_follower_ratio : "")
  const [top1FollowLocation, top1FollowLocationSetter] = useState(currentUser ? currentUser.platform_user.instagram_top1_follow_location : "")
  const [firstName, firstNameSetter] = useState(currentUser ? currentUser.platform_user.first_name : "")
  const [lastName, lastNameSetter] = useState(currentUser ? currentUser.platform_user.last_name : "")
  const [gender, genderSetter] = useState(currentUser ? currentUser.platform_user.gender : "")
  const [aboutMe, aboutMeSetter] = useState(currentUser ? currentUser.platform_user.about_me : "")

  useEffect(() => {
    if (currentUser)  {
    usernameSetter(currentUser.username)
    emailSetter(currentUser.email)
    paypalAccountSetter(currentUser.platform_user.paypal_account)
    rateSetter(currentUser.platform_user.ave_rate_per_campaign)
    websiteSetter(currentUser.platform_user.website)
    igUrlSetter(currentUser.platform_user.instagram_url)
    followerNumberSetter(currentUser.platform_user.instagram_follower)
    femaleFollowRatioSetter(currentUser.platform_user.instagram_female_follower_ratio)
    top1FollowLocationSetter(currentUser.platform_user.instagram_top1_follow_location)
    firstNameSetter(currentUser.platform_user.first_name)
    lastNameSetter(currentUser.platform_user.last_name)
    genderSetter(currentUser.platform_user.gender)
    aboutMeSetter(currentUser.platform_user.about_me)
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
      content_creator: {
        first_name: firstName,
        last_name: lastName,
        gender: gender,
        instagram_username: igUrl.slice(25,-1),
        instagram_url: igUrl,
        instagram_follower: followerNumber,
        instagram_female_follower_ratio: femaleFollowRatio,
        instagram_top1_follow_location: top1FollowLocation,
        ave_rate_per_campaign: rate,
        paypal_account: paypalAccount,
        website
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
          history.push('/ccprofile')
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

        <Typography component="h6" >Getting Paid</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="paypalAccount"
              label="Paypal Account"
              name="paypalAccount"
              autoComplete="paypalAccount"
              autoFocus
              value={paypalAccount}
              onChange={(e)=>paypalAccountSetter(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="rate"
              label="Avg rate for a collab $"
              name="rate"
              autoComplete="rate"
              autoFocus
              value={rate}
              onChange={(e)=>rateSetter(e.target.value)}
            />
          </Grid>
        </Grid>
        <br></br>

        <Typography component="h6" >About Your Online Presence</Typography>
        <Grid container spacing={1}>
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
          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              margin="normal"
              fullWidth
              id="igUrl"
              label="Instagram Account Url"
              name="igUrl"
              autoComplete="igUrl"
              autoFocus
              value={igUrl}
              onChange={(e)=>igUrlSetter(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="followerNumber"
              label="Follower Number"
              name="followerNumber"
              autoComplete="followerNumber"
              autoFocus
              value={followerNumber}
              onChange={(e)=>followerNumberSetter(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="femaleFollowRatio"
              label="Female Follow Ratio"
              name="femaleFollowRatio"
              autoComplete="femaleFollowRatio"
              autoFocus
              value={femaleFollowRatio}
              onChange={(e)=>femaleFollowRatioSetter(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="top1FollowLocation"
              label="Top1 Followed Location"
              name="top1FollowLocation"
              autoComplete="top1FollowLocation"
              autoFocus
              value={top1FollowLocation}
              onChange={(e)=>top1FollowLocationSetter(e.target.value)}
            />
          </Grid>
        </Grid>
        <br></br>


        <Typography component="h6" >About You</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              value={firstName}
              onChange={(e)=>firstNameSetter(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              autoFocus
              value={lastName}
              onChange={(e)=>lastNameSetter(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="gender"
              label="Gender"
              name="gender"
              autoComplete="gender"
              autoFocus
              value={gender}
              onChange={(e)=>genderSetter(e.target.value)}
            />
          </Grid>         
          <Grid item xs={12} >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="aboutMe"
              label="About Me"
              name="aboutMe"
              autoComplete="aboutMe"
              autoFocus
              multiline
              rows={4}
              value={aboutMe}
              onChange={(e)=>aboutMeSetter(e.target.value)}
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