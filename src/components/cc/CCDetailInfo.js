import CollabReviewFormForUpdate from '../forms_and_cards/CollabReviewFormForUpdate';
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
    modalBody = <CollabReviewFormForUpdate review={review} forCancelBtn={handleClose}/>
 
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
      <div className="info-list">
                <h3>{viewingCC.first_name} {viewingCC.last_name}</h3>
                <br></br>
                <h4>Instagram Info</h4>
                <p>instagram: <a href={viewingCC.instagram_url} >  {viewingCC.instagram_username}</a></p>
                <p>Follower: {viewingCC.instagram_follower}</p>
                <p>Female follow ratio: {viewingCC.instagram_female_follower_ratio}%</p>
                <p>Top 1 followed location: {viewingCC.instagram_top1_follow_location}</p>
                <br></br>
                <h4>Online presence</h4>
                <p>Website: <a href={viewingCC.website} >  {viewingCC.website}</a></p>
                <br></br>
                <h4>About {viewingCC.first_name}: </h4>
                <p>{viewingCC.about_me}</p>
            </div>
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