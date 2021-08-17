
import ReactStars from "react-rating-stars-component";
import CollabReviewForm from "./CollabReviewForm";
import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';

import {useSelector, useDispatch} from 'react-redux' 

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width:"100%",
  },
}));

export default function CollabReviewCard({ review }) {

  const classes = useStyles();
  const dispatch = useDispatch();
  const openReviewForm = useSelector((state) => state.reviewReducer.openReviewForm)

  const handleOpen = () => {
    console.log("yo")
    dispatch({ type: 'OPEN_REVIEW_FORM', playload: true})
  };

  const handleClose = () => {
    dispatch({type: 'OPEN_REVIEW_FORM', playload: false});
  };

  console.log('openReviewForm', openReviewForm)

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  console.log(review)

    return (
      <div className="collab-review-card">
        <Grid item xs={12} >
          <Paper className={classes.paper}>  
            <div className="container-in-collab-review-paper">

            <div className="upper-in-collab-review-paper">
              <ReactStars
              count={5}
              value={review.rating}
              onChange={ratingChanged}
              edit={false}
              size={20}
              isHalf={true}
              char="♥"
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#c40405"
              />

              <div className="upper-right-in-collab-review-paper">

                <div className="name-date-in-collab-review-paper">
                  <p>{review.date.slice(0,10)}</p>
                  {review.reviewer ? <p>{review.reviewer.name}</p> : <p>{review.reviewee.name}</p>}
                </div>

                <div className={classes.root}>
                {review.reviewer ? 
                <Avatar alt={review.reviewer.name} src={review.reviewer.profile_pic} /> 
                : <Avatar alt={review.reviewee.name} src={review.reviewee.profile_pic} /> 
                }
                </div>
              </div>

            </div>
            <p className="review-content">
              {review.content}
            </p>
            </div>

            <button onClick={handleOpen}>Edit</button>
            <button >Delete</button>
          </Paper>

          <Modal
          open={openReviewForm}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          >
            <CollabReviewForm review={review} handleClose={handleClose}/>
        </Modal>

        </Grid>
      </div>
    );
  }
