import ReactStars from "react-rating-stars-component";
import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';

// MUI
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#c40405',
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },

}));


export default function CollabReviewFormForEdit({ review, forCancelBtn, setRatingNumOnDisplay, setReviewContentOnDisplay}) {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [rating, ratingSetter] = useState(review.rating)
  const [newReview, newReviewSetter] = useState(review.content)
  const [updateDate, updateDateSetter] = useState(review.date.slice(0,10))


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
        forCancelBtn(false)
        setRatingNumOnDisplay(updatedReview.rating)
        setReviewContentOnDisplay(updatedReview.content)
        dispatch({type: "FETCH_VIEWING_BUSINESS" })
        dispatch({type: "NEED_FETCH_USER" })
      } else {
        const err = await res.json();
        alert(err.errors)
      }
    }
    reviewUpdate();
  }

  console.log(rating)

  const handleCancel = () => {
    forCancelBtn(false) //CollabReviewCard shows the review
  }

    return (
      <div >
          <Grid item xs={12}>
              <div className="container-in-collab-review-paper">

              <form className={classes.form} noValidate autoComplete="off" onSubmit={handleReviewEdit}>
                
                <div className="upper-in-collab-review-paper">

                <StyledRating
                  name="customized-color"
                  value={rating}
                  getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                  onChange={(e, newValue)=>{ratingSetter(newValue)}}
                  precision={0.5}
                  icon={<FavoriteIcon fontSize="inherit" style={{ fill: "#c40405" }}/>}
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
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
                  <div className="review-card-btn-group"> 
                    <button type="submit" value="Submit">Submit</button>
                    <button onClick={handleCancel}>cancel</button>
                  </div>
                </form>

              </div>
          </Grid>
      </div>
    );
  }
  