import CollabReviewFormForUpdate from '../forms_and_cards/CollabReviewFormForUpdate';
import CollabReviewFormForNew from '../forms_and_cards/CollabReviewFormForNew';

import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux';
import { useState } from 'react';


export default function BusinessDetailInfo() {
  const viewingBusiness = useSelector((state) => state.businessReducer.viewingBusiness);
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const [isNewReview, isNewReviewSetter] = useState(false); // detemine if it modal the POST or PATCH Form
  const [open, setOpen] = useState(false);
  const [review, reviewSetter] = useState(null)

  if (!viewingBusiness || !currentUser) return <h2>Loading...</h2>;

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateReview = () => {
    reviewSetter(currentUser.reviews_i_wrote.find((r) => r.reviewee.id === viewingBusiness.id))
    isNewReviewSetter(false)
    setOpen(true);
  }

  const handleLeaveReview = () => {
    isNewReviewSetter(true)
    setOpen(true);
  };

  let modalBody;
  isNewReview ? 
    modalBody =  <CollabReviewFormForNew viewingParty={viewingBusiness} forCancelBtn={handleClose}/> : 
    modalBody = <CollabReviewFormForUpdate review={review} forCancelBtn={handleClose}/>

 
  return (

    <Grid container spacing={1}>
      <Grid item xs={12} sm={3}>
        <div className="profile-img-and-uploads-btn">
          { viewingBusiness.profile_pic === "" ? 
            <img src="https://via.placeholder.com/280x280.png" alt={viewingBusiness.name}/> : 
            <img src={viewingBusiness.profile_pic} alt={viewingBusiness.name}/>
          }
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <div className="info-list">
            <h3>{viewingBusiness.name}</h3>
            <br></br>
            <p>Business Type: {viewingBusiness.business_type}</p>
            <br></br>
            <p>HQ location: {viewingBusiness.address} {viewingBusiness.city}</p>
            <br></br>
            <p>website: <a href={viewingBusiness.website} > {viewingBusiness.website}</a></p>
            <br></br>
            <p>business description: </p>
            <br></br>
            <p>{viewingBusiness.description}</p> 
        </div>
      </Grid>

      {viewingBusiness.cc_I_worked_with.find(cc=>cc.id === currentUser.platform_user.id) ? 
      <Grid item xs={12} sm={3}>
        <div className="profile-btn">
            {currentUser.reviews_i_wrote.find((r) => r.reviewee.id === viewingBusiness.id) ?
                <button  onClick={handleUpdateReview}>Update your review</button> :
                <button  onClick={handleLeaveReview}>Leave a review</button>
            }
        </div>
      </Grid> 
      : null
      } 

      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          >
          {modalBody}
      </Modal>
    </Grid>
  );
}