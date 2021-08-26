import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

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


export default function NewProfilePicForm({ handleClose }) {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const [modalStyle] = React.useState(getModalStyle);
  const [newPassword, setNewPassword] = useState("")
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("")

  console.log(newPassword, newPasswordConfirmation)

  const handleSubmit = (e) => {
    e.preventDefault()
    async function changePD() {
        const res = await fetch(`/users/${currentUser.id}`, {
          method: "PATCH",
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ password: newPassword, password_confirmation: newPasswordConfirmation})
        });
        if (res.ok) {
          const userData = await res.json();
          console.log("dataBackFromPatch",userData)
          // useDispatch({ type: "SET_CURRENT_USER", playload: userData})
        } else {
          const error = await res.json()
          alert(error.errors)
        }
      }
      changePD();
      handleClose();
  }

  return (
    <div className="NewProfilePicForm">
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Change Password</h2>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
              value={newPassword}
              onChange={(e)=>setNewPassword(e.target.value)}
            />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="passwordConfirmation"
            label="Password Confirmation"
            type="password"
            id="passwordConfirmation"
            autoComplete="current-password"
            value={newPasswordConfirmation}
            onChange={(e)=>setNewPasswordConfirmation(e.target.value)}
          />
            <button
              type="submit"
              style={{ width: '100%', marginTop: '15px'}}
            >
              Save new password
            </button>
        </form>
      </div>
    </div>
  );
  }
  