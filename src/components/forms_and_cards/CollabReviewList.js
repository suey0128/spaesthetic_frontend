import CollabReviewCard from '../forms_and_cards/CollabReviewCard'
import CollabReviewForm from '../forms_and_cards/CollabReviewForm'
import Grid from '@material-ui/core/Grid';

import React from 'react';
import Modal from '@material-ui/core/Modal';

import {useSelector, useDispatch} from 'react-redux' 


export default function CollabReviewList() {
  const dispatch = useDispatch();
  const openReviewForm = useSelector((state) => state.reviewReducer.openReviewForm)

  const handleClose = () => {
    dispatch({type: 'OPEN_REVIEW_FORM', playload: false});
  };

  console.log('openReviewForm', openReviewForm)

    return (
      <div className="CollabReviewsWroteByCC">
          <Grid container spacing={1}>
            <CollabReviewCard/>
          </Grid>

          <Modal
          open={openReviewForm}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          >
            <CollabReviewForm />
        </Modal>
      </div>
    );
  }
