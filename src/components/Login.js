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

import { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SET_IS_ON_LANDING_PAGE", playload: false})
  },[])

  const [username, usernameSetter] = useState("")
  const [password, passwordSetter] = useState("")

  async function handleSubmit(e){
    e.preventDefault()
    const user = {
        username:username,
        password:password
    }
    // const res = await fetch(`https://spaesthetic.herokuapp.com/login`,{ //=>'sessions#create'
    const res = await fetch(`/login`,{ //=>'sessions#create'
        method: 'POST',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user})
    });
    const userData = await res.json();
    if(userData.id){
        dispatch({ type: "SET_CURRENT_USER", playload: userData})
        history.push('/')
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
          Login
        </Typography>

        <form className={classes.form} noValidate onSubmit={handleSubmit}>
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

          <TextField
            variant="outlined"
            margin="normal"
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

          <button
            type="submit"
            style={{ width: '100%', marginTop: '15px'}}
          >
            Login
          </button>
          <Grid container>
            <Grid item xs className="signup-in-login">
              <Link href="/businesssignup" color="primary">
                Sign up as Business
              </Link>
              <Link href="/ccsignup" color="primary">
                Sign up as Content Creator
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}