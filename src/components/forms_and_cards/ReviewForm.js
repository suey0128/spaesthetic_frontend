import ReactStars from "react-rating-stars-component";
import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

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
}));

function ReviewForm() {

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


              <form className={classes.form} noValidate autoComplete="off">
                <TextField 
                    id="outlined-basic" 
                    label="Your Review Here" 
                    variant="outlined" 
                    fullWidth={true}
                    
                    />


              </form>

            </div>
          </Paper>
        </Grid>
      </div>
    );
  }
  
  export default ReviewForm;