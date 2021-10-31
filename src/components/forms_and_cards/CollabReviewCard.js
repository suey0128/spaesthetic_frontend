
import CollabReviewFormForEdit from "./CollabReviewFormForEdit";
import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';

import { useDispatch} from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// MUI
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import fetchPort from '../fetchPort';


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
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width:"100%",
    borderRadius:20,
  },
}));



export default function CollabReviewCard({ review, showBtn, isOnCCdeatilPageViewingByBusiness }) {

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [isEditing, isEditingSetter] =useState(false)
  const [ratingNumOnDisplay, setRatingNumOnDisplay] = useState(review.rating)
  const [reviewContentOnDisplay, setReviewContentOnDisplay] = useState(review.content)


  const handleEdit = () => {
    isEditingSetter(true)
  }

  const handleDelete = () => {
    //delete the review instance base on id
    async function deleteReview() {
          const res = await fetch(`${fetchPort}/reviews/${review.id}`,{
            method: 'DELETE'
        })
        if (res.ok) {
        dispatch({type: "NEED_FETCH_USER" })
      }
    }
    deleteReview() 
  }

  const nameOnDisplay = () => {
    if (review.reviewer) {
      if (review.reviewer.name) {
        return <p>{review.reviewer.name}</p>
      } else {
        return <p>{review.reviewer.first_name}</p>
      }
    } else  {
      if (review.reviewee.name) {
        return <p>{review.reviewee.name}</p>
      } else {
        return <p>{review.reviewee.first_name}</p>
      }
    }
  }

  const handleAcatarClick = () => {
    if ( isOnCCdeatilPageViewingByBusiness ) {
      return null
    }
    if (review.reviewer) {
      if (review.reviewer.name) {
        return (history.push(`/businessdetail/${review.reviewer.id}`))
      } else {
        return (history.push(`/ccdetail/${review.reviewer.id}`))
      }
    } else  {
      if (review.reviewee.name) {
        return (history.push(`/businessdetail/${review.reviewee.id}`))
      } else {
        return (history.push(`/ccdetail/${review.reviewee.id}`))
      }
    }
  }


    return (

      <Container component="main" maxWidth="lg" className={classes.paper}>
        <Paper className={classes.paper}>  
        {isEditing ? 
          <CollabReviewFormForEdit review={review} forCancelBtn={isEditingSetter} setRatingNumOnDisplay={setRatingNumOnDisplay} setReviewContentOnDisplay={setReviewContentOnDisplay}/>
          :
          <div className="container-in-collab-review-paper">

            <div className="upper-in-collab-review-paper">

              <StyledRating
                name="customized-color"
                value={ratingNumOnDisplay}
                readOnly
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" style={{ fill: "#c40405" }} />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              />


              <div className="upper-right-in-collab-review-paper">

                <div className="name-date-in-collab-review-paper">
                  <p>{review.date.slice(0,10)}</p>

                  {nameOnDisplay()}


                </div>

                <div className={classes.root}>
                
                {review.reviewer ? 
                <Avatar alt={review.reviewer.name} src={review.reviewer.profile_pic} onClick={handleAcatarClick}/> 
                : <Avatar alt={review.reviewee.name} src={review.reviewee.profile_pic} onClick={handleAcatarClick}/> 
                }
                </div>
              </div>

            </div>
          
            <p className="review-content">
              {reviewContentOnDisplay}
            </p>

            { showBtn ? 
          <div className="review-card-btn-group">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div> : null
          }
          </div>
        }
        </Paper>
      </Container>

    );
  }
