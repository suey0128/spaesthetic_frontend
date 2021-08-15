import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {useSelector, useDispatch} from 'react-redux'


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
}));

export default function BusinessProfileInfo() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const ccProfileEditBody = useSelector((state) => state.ccReducer.ccProfileEditBody)

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);



  const handleClose = () => {
    setOpen(false);
  };

  //write here for what pop's up
  const bodyInfo = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">bodyInfo</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  const bodyPicUpload = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">bodyPicUpload</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
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
    dispatch({ type: "SET_CC_PROFILE_EDIT_BODY", playload: bodyInfo})
    setOpen(true);
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
    // <div>
    //   <button type="button" onClick={handleOpen}>
    //   CCProfileEditForm modal
    //   </button>

    <div>
        <h2>CCProfileInfo</h2>
        <div>
            <img src="https://via.placeholder.com/200x250.png" alt="ccprofile picture"/>
        </div>

        <ul>
            <li>first name last name</li>
            <li>gender</li>
            <li>Follower</li>
            <li>Male/Female follow ratio</li>
            <li>Top 1 followed location</li>
            <li>Avg rate for a campaign</li>
            <li>paypal account</li>
            <li>About me: </li>
        </ul>

        <div>
            <button onClick={handleOpenInfoEdit} >Edit profile</button>
            <button onClick={handleOpenProfilePicUpload}>Update profile Pic</button>
            <button onClick={handleOpenChangePD}>Change password</button>
        </div>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
            {ccProfileEditBody}
        </Modal>
    </div>

  );
}