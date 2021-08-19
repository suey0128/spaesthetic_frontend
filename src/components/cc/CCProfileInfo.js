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
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenInfoEdit = () => {
    history.push('/ccprofileedit')
  };

  const handleOpenProfilePicUpload = () => {
    dispatch({ type: "SET_CC_PROFILE_EDIT_BODY", playload: <NewProfilePicForm handleClose={handleClose} />})
    setOpen(true);
  };

  const handleOpenChangePD = () => {
    dispatch({ type: "SET_CC_PROFILE_EDIT_BODY", playload: <PasswordEditForm handleClose={handleClose} />})
    setOpen(true);
  };

  if (currentUser === null) return <h2>Loading...</h2>;

  return (

    <Grid container spacing={1}>
      <Grid item xs={12} sm={3}>
        <div className="profile-img-and-uploads-btn">
            {/* <img src="https://via.placeholder.com/280x350.png" alt="ccprofile picture"/> */}
            <img src={currentUser.platform_user.profile_pic} alt={currentUser.username}/>
            <button onClick={handleOpenProfilePicUpload}>Update profile Pic</button>
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <ul className="profile-info-list">
            <li>Username: {currentUser.username}</li>
            <li>{currentUser.platform_user.first_name} {currentUser.platform_user.last_name}</li>
            <li>{currentUser.platform_user.gender}</li>
            <li>{currentUser.email}</li>
            <li>{currentUser.platform_user.website}</li>
            <a href={currentUser.platform_user.instagram_url}>{currentUser.platform_user.instagram_username}</a>
            <li>Follower: {currentUser.platform_user.instagram_follower}</li>
            <li>Female follow ratio: {currentUser.platform_user.instagram_female_follower_ratio} </li>
            <li>Top 1 followed location: {currentUser.platform_user.instagram_top1_follow_location}</li>
            <li>Avg rate for a campaign: {currentUser.platform_user.ave_rate_per_campaign}</li>
            <li>paypal account: {currentUser.platform_user.paypal_account}</li>
            <li>About me</li>
            <li>{currentUser.platform_user.about_me}</li>
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