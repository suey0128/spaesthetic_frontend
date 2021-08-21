
import ReactStars from "react-rating-stars-component";
import CollabReviewFormForEdit from "./CollabReviewFormForEdit";
import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';

import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

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

export default function CollabReviewCard({ review, showBtn }) {

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [isEditing, isEditingSetter] =useState(false)

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const handleEdit = () => {
    isEditingSetter(true)
  }

  const handleDelete = () => {
    console.log(review)
    //delete the review instance base on id
    async function deleteReview() {
        const res = await fetch(`reviews/${review.id}`,{
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
          <CollabReviewFormForEdit review={review} forCancelBtn={isEditingSetter}/>
          :
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
              {review.content}
            </p>

            { showBtn ? 
          <div>
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
