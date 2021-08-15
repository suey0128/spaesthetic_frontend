import CCProfileEditForm from "./CCProfileEditForm"

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


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
  info: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper: {
    position: 'absolute',
    width: 1000,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CCProfileInfo() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const ccProfileEditBody = useSelector((state) => state.ccReducer.ccProfileEditBody)

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);



  const handleClose = () => {
    setOpen(false);
  };

  //write here for the body that pops up
  const bodyPicUpload = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">bodyPicUpload</h2>
      {/* <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
      </form> */}
    </div>
  );

  const bodyChangePD = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">bodyChangePD</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  const handleOpenInfoEdit = () => {
    history.push('/ccprofileedit')
  };

  const handleOpenProfilePicUpload = () => {
    dispatch({ type: "SET_CC_PROFILE_EDIT_BODY", playload: bodyPicUpload})
    setOpen(true);
  };

  const handleOpenChangePD = () => {
    dispatch({ type: "SET_CC_PROFILE_EDIT_BODY", playload: bodyChangePD})
    setOpen(true);
  };

  return (

    <Grid container spacing={1}>
      <Grid item xs={12} sm={3}>
        <div className="profile-img-and-uploads-btn">
            <img src="https://via.placeholder.com/200x250.png" alt="ccprofile picture"/>
            <button onClick={handleOpenProfilePicUpload}>Update profile Pic</button>
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <ul className="profile-info-list">
            <li>username</li>
            <li>first name last name</li>
            <li>gender</li>
            <li>email</li>
            <li>website</li>
            <li>Linked Instagram account</li>
            <li>Follower</li>
            <li>Male/Female follow ratio</li>
            <li>Top 1 followed location</li>
            <li>Avg rate for a campaign</li>
            <li>paypal account</li>
            <li>About me</li>
            <p>About me content</p>
        </ul>
      </Grid>

      <Grid item xs={12} sm={3}>
        <div className="profile-btn">
            <button onClick={handleOpenInfoEdit} >Edit profile</button>
            <button onClick={handleOpenChangePD}>Change password</button>
        </div>
      </Grid>


        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
            {ccProfileEditBody}
        </Modal>
    </Grid>
  );
}