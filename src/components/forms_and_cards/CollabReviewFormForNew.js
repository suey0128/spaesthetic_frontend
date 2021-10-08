import ReactStars from "react-rating-stars-component";
import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';

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


export default function CollabReviewFormForNew({ viewingParty, forCancelBtn }) {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [rating, ratingSetter] = useState(5)
  const [newReview, newReviewSetter] = useState("")
  const [updateDate, updateDateSetter] = useState(new Date().toDateString())
  const currentUser = useSelector((state) => state.userReducer.currentUser);


  if (!currentUser ) return <h2>Loading...</h2>;
  if (!viewingParty) return <h2>Loading...</h2>;

  const handlePostingReview = (e) => {
    e.preventDefault(); 
    // console.log(viewingParty, currentUser)
    const postingReview = {
        reviewer_id: currentUser.platform_user_id,
        reviewer_type: currentUser.platform_user_type,
        reviewee_id: viewingParty.id,
        reviewee_type: viewingParty.user.platform_user_type,
        content: newReview,
        rating,
    }
    // console.log(postingReview)
    async function postNewReview () {
      const res = await fetch(`/reviews`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postingReview)
      });
      if (res.ok) {
        const data = await res.json();
        forCancelBtn(false)
        console.log(data)
        dispatch({type: "FETCH_VIEWING_BUSINESS" })
        dispatch({type: "FETCH_VIEWING_CC" })
        dispatch({type: "NEED_FETCH_USER" })
      } else {
        const err = await res.json();
        alert(err.errors)
      }
    }
    postNewReview();
  }

  const handleCancel = () => {
    forCancelBtn(false) //CollabReviewCard shows the review
  }

    return (
      <div  className="modal-forms">
          <Grid item xs={12}>
              <div className="container-in-collab-review-paper">

              <form className={classes.form} noValidate autoComplete="off" onSubmit={handlePostingReview}>
                
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
                      <p>{viewingParty.name}</p>
                    </div>

                    <div className={classes.root}>
                      <Avatar alt={viewingParty.name} src={viewingParty.profile_pic} />
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
                  <div className="review-form-btn-group">
                    <button type="submit" value="Submit">Post your review</button>
                    <button onClick={handleCancel}>cancel</button>
                  </div>
                </form>

              </div>
          </Grid>
      </div>
    );
  }
  