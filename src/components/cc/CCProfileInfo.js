import NewProfilePicForm from "../forms_and_cards/NewProfilePicForm"
import PasswordEditForm from "../forms_and_cards/PasswordEditForm";

import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


export default function CCProfileInfo() {
  const dispatch = useDispatch();
  const history = useHistory();
  const ccProfileEditBody = useSelector((state) => state.ccReducer.ccProfileEditBody)
  const currentUser = useSelector((state=> state.userReducer.currentUser))
  // const currentCC = currentUser.platform_user


  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenInfoEdit = () => {
    history.push('/ccprofileedit')
  };

  const handleOpenProfilePicUpload = () => {
    dispatch({ type: "SET_CC_PROFILE_EDIT_BODY", playload: <NewProfilePicForm />})
    setOpen(true);
  };

  const handleOpenChangePD = () => {
    dispatch({ type: "SET_CC_PROFILE_EDIT_BODY", playload: <PasswordEditForm />})
    setOpen(true);
  };

  return (

    <Grid container spacing={1}>
      <Grid item xs={12} sm={3}>
        <div className="profile-img-and-uploads-btn">
            <img src="https://via.placeholder.com/280x350.png" alt="ccprofile picture"/>
            <button onClick={handleOpenProfilePicUpload}>Update profile Pic</button>
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <ul className="profile-info-list">
            <li>currentUser.username</li>
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
            <li>About me content</li>
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