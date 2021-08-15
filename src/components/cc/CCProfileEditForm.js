import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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

  const [username, usernameSetter] = useState("")

  const currentUser = useSelector((state) => state.userReducer.currentUser);



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


        <form className={classes.form} noValidate >

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
            value={username}
            onChange={(e)=>usernameSetter(e.target.value)}
          />
        </Grid>      
        </Grid>
        <br></br>

        <Typography component="h6" >Getting Paid</Typography>
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
              value={username}
              onChange={(e)=>usernameSetter(e.target.value)}
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
              value={username}
              onChange={(e)=>usernameSetter(e.target.value)}
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
              value={username}
              onChange={(e)=>usernameSetter(e.target.value)}
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
              value={username}
              onChange={(e)=>usernameSetter(e.target.value)}
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
              value={username}
              onChange={(e)=>usernameSetter(e.target.value)}
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
              value={username}
              onChange={(e)=>usernameSetter(e.target.value)}
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
              value={username}
              onChange={(e)=>usernameSetter(e.target.value)}
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
              value={username}
              onChange={(e)=>usernameSetter(e.target.value)}
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
              value={username}
              onChange={(e)=>usernameSetter(e.target.value)}
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