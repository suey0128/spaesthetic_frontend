import ReactStars from "react-rating-stars-component";
import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

import { useState } from 'react'
import { set } from "date-fns/esm";
import {useSelector, useDispatch} from 'react-redux';

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


export default function CollabReviewFormForEdit({ review, forCancelBtn }) {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [rating, ratingSetter] = useState(review.rating)
  const [newReview, newReviewSetter] = useState(review.content)
  const [updateDate, updateDateSetter] = useState(review.date.slice(0,10))

  // //review passed down from BusinessDetailInfo
  // console.log(review) // {id: 4, reviewee: {…}, content: "review cc2 to b1", date: "2021-08-19T00:07:48.758Z", rating: 4}

  // //review passed down from CollabReviewCard(businessside)
  // console.log(review) // {id: 2, reviewee: {…}, content: "review b1 to cc2", date: "2021-08-19T00:07:48.735Z", rating: 3}

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
        // console.log(updatedReview.content, updatedReview.rating, updatedReview.updated_at.slice(0,10))
        forCancelBtn(false)
        console.log(updatedReview)
      } else {
        const err = await res.json();
        alert(err.errors)
      }
    }
    reviewUpdate();
    dispatch({type: "NEED_FETCH_USER" })
  }

  const handleCancel = () => {
    forCancelBtn(false) //CollabReviewCard shows the review
  }

    return (
      // <div  className="collab-review-card">
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
                  <button type="submit" value="Submit">Submit</button>
                  <button onClick={handleCancel}>cancel</button>

                </form>

              </div>
          </Grid>
      // </div>
    );
  }
  