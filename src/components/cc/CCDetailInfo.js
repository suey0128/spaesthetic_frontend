import CollabReviewFormForEdit from '../forms_and_cards/CollabReviewFormForEdit';
import CollabReviewFormForNew from '../forms_and_cards/CollabReviewFormForNew';

import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


export default function CCDetailInfo() {
  const dispatch = useDispatch();
  const viewingCC = useSelector((state) => state.ccReducer.viewingCC);
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const [isNewReview, isNewReviewSetter] = useState(false); // detemine if it modal the POST or PATCH Form
  const [open, setOpen] = useState(false);
  const [review, reviewSetter] = useState(null)

  if (!viewingCC || !currentUser) return <h2>Loading...</h2>;

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateReview = () => {
    reviewSetter(currentUser.reviews_i_wrote.find((r) => r.reviewee.id === viewingCC.id))
    isNewReviewSetter(false)
    setOpen(true);
  }

  const handleLeaveReview = () => {
    isNewReviewSetter(true)
    setOpen(true);
  };

  let modalBody;
  isNewReview ? 
    modalBody =  <CollabReviewFormForNew viewingParty={viewingCC} forCancelBtn={handleClose}/> : 
    modalBody = <CollabReviewFormForEdit review={review} forCancelBtn={handleClose}/>
 
  return (

    <Grid container spacing={1}>
      <Grid item xs={12} sm={3}>
        <div className="profile-img-and-uploads-btn">
          { viewingCC.profile_pic === "" ? 
            <img src="https://via.placeholder.com/280x280.png" alt={viewingCC.name}/> : 
            <img src={viewingCC.profile_pic} alt={viewingCC.name}/>
          }
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <ul className="profile-info-list">
            <li>{viewingCC.first_name} {viewingCC.last_name}</li>
            <li>{viewingCC.gender}</li>
            <li>{viewingCC.website}</li>
            <a href={viewingCC.instagram_url}>{viewingCC.instagram_username}</a>
            <li>Follower: {currentUser.platform_user.instagram_follower}</li>
            <li>Female follow ratio: {viewingCC.instagram_female_follower_ratio} </li>
            <li>Top 1 followed location: {viewingCC.instagram_top1_follow_location}</li>
            <li>Avg rate for a campaign: {viewingCC.ave_rate_per_campaign}</li>
            <li>About me</li>
            <li>{viewingCC.about_me}</li>
        </ul>
      </Grid>

        {viewingCC.campaigns.find(c=>c.business_id === currentUser.platform_user.id) ? 
      <Grid item xs={12} sm={3}>
        <div className="profile-btn">
            {currentUser.reviews_i_wrote.find((r) => r.reviewee.id === viewingCC.id) ?
                <button  onClick={handleUpdateReview}>Update your review</button> :
                <button  onClick={handleLeaveReview}>Leave a review</button>
            }
        </div>
      </Grid> : null
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