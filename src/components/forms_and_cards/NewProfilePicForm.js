import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// the fn that position the modal
function getModalStyle() {
  const top = 50 
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    width: '80%'
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
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  const [modalStyle] = React.useState(getModalStyle);
  const [url, urlSetter] = useState("")

  let userType;

  if (!currentUser) return <h2>Loading campaign</h2>
  currentUser.platform_user_type === "ContentCreator" ? userType = "content_creators" : userType = "businesses"

  const handleSubmit = (e) => {
    e.preventDefault();
    async function updateProfilePic () {
      const res = await fetch(`/${userType}/${currentUser.platform_user_id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ profile_pic: url })
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: 'NEED_FETCH_USER' })
      } else {
        const err = await res.json()
        alert(err.errors)
      };
    }
    updateProfilePic();
    handleClose();
  }

  return (
    <div className="NewProfilePicForm">
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Updating Your Profile Picture</h2>
        <form className={classes.form} noValidate onSubmit={(e)=>{handleSubmit(e)}}>
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
              value={url}
              onChange={(e)=>urlSetter(e.target.value)}
            />
            <button
              type="submit"
              style={{ width: '100%', marginTop: '15px'}}
            >
              Update
            </button>
        </form>
      </div>
    </div>
  );
  }
  