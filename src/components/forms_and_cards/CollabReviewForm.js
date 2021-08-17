import ReactStars from "react-rating-stars-component";
import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

import { useState } from 'react'
import { set } from "date-fns/esm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  text: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  popup: {
    position: 'absolute',
    width: 1000,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

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

export default function CollabReviewForm({ review, handleClose }) {

  console.log(review)

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [rating, ratingSetter] = useState(review.rating)
  const [newReview, newReviewSetter] = useState(review.content)
  const [updateDate, updateDateSetter] = useState(review.date.slice(0,10))
  console.log (review)

  const ratingChanged = (newRating) => {
    ratingSetter(newRating);
  };

  const handleReviewEdit = (e) => {
    e.preventDefault(); 
    async function reviewUpdate () {
      const res = await fetch(`/reviews/${review.id}`,{
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rating: rating, content: newReview})
      });
      if (res.ok) {
        const updatedReview = await res.json();
        console.log("yes", updatedReview.content, updatedReview.rating, updatedReview.updated_at.slice(0,10))
        newReviewSetter(updatedReview.content);
        ratingSetter(updatedReview.rating);
        updateDateSetter(updatedReview.updated_at.slice(0,10));
        handleClose();
      } else {
        const err = await res.json();
        alert(err.errors)
      }
    }
    reviewUpdate();
  }

    return (
      <div  className="collab-review-card">
        <div style={modalStyle} className={classes.popup}>
          <Grid item xs={12}>
              <div className="container-in-collab-review-paper">

              <form className={classes.form} noValidate autoComplete="off" onSubmit={handleReviewEdit}>
                
                <div className="upper-in-collab-review-paper">
                  <ReactStars
                    count={5}
                    value={rating}
                    // onChange={(e)=>{ratingSetter(e.target.value)}}
                    // value={review.rating}
                    onChange={ratingChanged}
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
                      <p>{updateDate}</p>
                      <p>{review.reviewee.name}</p>
                    </div>

                    <div className={classes.root}>
                      <Avatar alt={review.reviewee.name} src={review.reviewee.profile_pic} />
                    </div>
                  </div>

                </div>

                  <TextField 
                      id="outlined-basic" 
                      label="Your Review Here" 
                      multiline
                      rows={4} 
                      variant="outlined" 
                      fullWidth={true}
                      value={newReview}
                      onChange={(e)=>{newReviewSetter(e.target.value)}}
                      />
                  <button>Submit</button>

                </form>

              </div>
          </Grid>
        </div>
      </div>
    );
  }
  