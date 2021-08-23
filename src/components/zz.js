// List wrapper 
import Grid from '@material-ui/core/Grid';


  <Grid container spacing={1}>
         
</Grid>


// in the card 

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const classes = useStyles();

<Grid item xs={12}>
<Paper className={classes.paper}>  
paper
</Paper>
</Grid>


// pop up form template
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
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
    <div>
      <Typography component="h1" variant="h5">
        Edit Profile Info
      </Typography>

      <form className={classes.form} noValidate >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </Grid>
      </form>
    </div>


  );
}


