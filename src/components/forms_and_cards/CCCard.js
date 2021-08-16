import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import {useSelector, useDispatch} from 'react-redux' 


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CCCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const openCurrentCampaignList = useSelector((state) => state.campaignReducer.openCurrentCampaignList)

  const handleOpen = () => {
    dispatch({ type: 'OPEN_CURRENT_CAMPAIGN_LIST', playload: true });
  };

    return (
      //<div>
        <Paper className={classes.paper}>
          <Grid container spacing={1} className="campaign-card">
              <Grid item xs={12} sm={3}>
                  <img className="img-in-Campaign-card"
                        src="https://cdn.vox-cdn.com/thumbor/vjciPYMEQy2ez9UIj_sksSOqC_4=/0x0:1000x667/1200x800/filters:focal(420x253:580x413)/cdn.vox-cdn.com/uploads/chorus_image/image/61171177/01_2013_ALFRED_COFFEE-3.0.0.1412833624.0.jpeg"
                        alt="b1"
                  />
              </Grid>

              <Grid item xs={12} sm={6}>
                  <div className="info-in-Campaign-card">
                    <p>cc name:</p>
                    <p>website</p>
                    <p>Linked Instagram account</p>
                    <p>Follower</p>
                    <p>Male/Female follow ratio</p>
                    <p>Top 1 followed location</p>
                    <p>Avg rate for a campaign</p>
                    <p>About this cc</p>
                    <p>About this cc content</p>
                  </div>
              </Grid>

              <Grid item xs={12} sm={3}>
                  <div className="buttons-in-Campaign-card">
                    <button>See Details</button>
                    <button onClick={handleOpen}>Invite</button>
                  </div>
              </Grid>


              
          </Grid>
        </Paper> 
      //</div>

    );
  }