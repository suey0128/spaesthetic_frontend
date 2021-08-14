import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function CampaignCard() {
  const classes = useStyles();

    return (
      // <div className="CampaignCard">
          <Grid item xs={12}>
            <Paper className={classes.paper}>  
            <div className="campaign-card">
              <img className="img-in-Campaign-card"
                    src="https://cdn.vox-cdn.com/thumbor/vjciPYMEQy2ez9UIj_sksSOqC_4=/0x0:1000x667/1200x800/filters:focal(420x253:580x413)/cdn.vox-cdn.com/uploads/chorus_image/image/61171177/01_2013_ALFRED_COFFEE-3.0.0.1412833624.0.jpeg"
                    alt="b1"
              />
              <div className="info-in-Campaign-card">
                <p>campaign name:</p>
                <p>host by:</p>
                <p>location:</p>
                <p>compensation_type:</p>
                <p>compensation_market_value:</p>
                <p>campaign start date:</p>
                <p>ampaign end date:</p>
                <p>apply by:</p>
                <p>requirement:</p>
                <p>following minium:</p>
                <p>gender:</p>
                <p>others:</p>
                <p>details:</p>
              </div>

              <div className="buttons-in-Campaign-card">
                <button>See Details</button>
                <button>Apply</button>
              </div>
            </div>
            </Paper>
          </Grid>
      // </div>
    );
  }
  
  export default CampaignCard;