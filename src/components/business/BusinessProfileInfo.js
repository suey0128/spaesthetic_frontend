import NewProfilePicForm from "../forms_and_cards/NewProfilePicForm"
import PasswordEditForm from "../forms_and_cards/PasswordEditForm";

import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


export default function BusinessProfileInfo() {
  const dispatch = useDispatch();
  const history = useHistory();
  const ccProfileEditBody = useSelector((state) => state.ccReducer.ccProfileEditBody)


  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenInfoEdit = () => {
    history.push('/businessprofileedit')
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
            <img src="https://via.placeholder.com/280x280.png" alt="ccprofile picture"/>
            <button onClick={handleOpenProfilePicUpload}>Update logo pic</button>
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <ul className="profile-info-list">
            <li>username</li>
            <li>email</li>
            <li>business name</li>
            <li>business type</li>
            <li>HQ location</li>
            <li>website</li>
            <li>business description</li>
            <p>business description content</p>
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