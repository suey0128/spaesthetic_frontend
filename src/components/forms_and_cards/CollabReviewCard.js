
import ReactStars from "react-rating-stars-component";
import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

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
}));

function CollabReviewCard() {

  const classes = useStyles();

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

    return (
      <div className="collab-review-card">
        <Grid item xs={12}>
          <Paper className={classes.paper}>  
            <div className="container-in-collab-review-paper">

            <div className="upper-in-collab-review-paper">
              <ReactStars
              count={5}
              value={4.5}
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
                  <p>8/6/2021</p>
                  <p>Name</p>
                </div>

                <div className={classes.root}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
              </div>

            </div>
            <p className="review-content">
            review place holder:  haven't reviewed a business in a while because I'm pretty lazy now. But, cashew deserves my time and my review.

            I have nothing but good things to say about this new Thai restaurant. We are visiting from Los Angeles and was staying down the street at Mediterranean inn when my kids and I stumbled upon this new hidden gem!!! It must have been destiny since their sign isn't even up yet.

            Our waitress was super nice and attentive. Great attitude and always kept my water filled. She must have topped off my water like 20 times throughout dinner.

            On to the food. The Food came out fairly fast. 
            </p>
            </div>
          </Paper>
        </Grid>
      </div>
    );
  }
  
  export default CollabReviewCard;