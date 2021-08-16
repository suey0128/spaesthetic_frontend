import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useState } from 'react'

// the fn that position the modal
function getModalStyle() {
  const top = 50 
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 1000,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function NewProfilePicForm() {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [username, usernameSetter] = useState("")

  const handleSubmit = () => {

  }

  return (
    <div className="NewProfilePicForm">
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Updating Your Profile Picture</h2>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="profilePic"
              label="Profile Picture"
              name="profilePic"
              autoComplete="profilePic"
              autoFocus
              value={username}
              onChange={(e)=>usernameSetter(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Update
            </Button>
        </form>
      </div>
    </div>
  );
  }
  