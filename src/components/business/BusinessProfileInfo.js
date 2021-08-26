import NewProfilePicForm from "../forms_and_cards/NewProfilePicForm"
import PasswordEditForm from "../forms_and_cards/PasswordEditForm";

import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect} from 'react';

export default function BusinessProfileInfo() {
  const dispatch = useDispatch();
  const history = useHistory();
  const businessProfileEditBody = useSelector((state) => state.businessReducer.businessProfileEditBody)
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch({ type: "SET_IS_ON_LANDING_PAGE", playload: false})
  },[])

  if (currentUser === null) return <h2>Loading...</h2>;


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenInfoEdit = () => {
    history.push('/businessprofileedit')
  };

  const handleOpenProfilePicUpload = () => {
    dispatch({ type: "SET_BUSINESS_PROFILE_EDIT_BODY", playload: <NewProfilePicForm handleClose={handleClose}/>})
    setOpen(true);
  };

  const handleOpenChangePD = () => {
    dispatch({ type: "SET_BUSINESS_PROFILE_EDIT_BODY", playload: <PasswordEditForm handleClose={handleClose}/>})
    setOpen(true);
  };


  return (

    <Grid container spacing={1}>
      <Grid item xs={12} sm={3}>
        <div className="profile-img-and-uploads-btn">
          { currentUser.platform_user.profile_pic === "" ? 
            <img src="https://via.placeholder.com/280x280.png" alt={currentUser.platform_user.name}/> : 
            <img src={currentUser.platform_user.profile_pic} alt={currentUser.platform_user.name}/>
          }
            <button onClick={handleOpenProfilePicUpload}>Update logo pic</button>
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <div className="info-list">
          <h4>Account Info: </h4>
            <p>Username: {currentUser.username}</p>
            <p>Email: {currentUser.email}</p>
            <br></br>
          
          <h4>Business Info: </h4>
            <p>Company: {currentUser.platform_user.name}</p>
            <p>Business Type: {currentUser.platform_user.business_type}</p>
            <p>HQ location: {currentUser.platform_user.address} {currentUser.platform_user.city}</p>
            <p>website: {currentUser.platform_user.website}</p>
            <br></br>
            <p>business description: </p>
            <p>{currentUser.platform_user.description}</p>

        </div>
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
          {businessProfileEditBody}
      </Modal>
    </Grid>
  );
}