import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  avatar: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function CampaignCard({ campaign }) {
  const classes = useStyles();

  console.log("campaignInCampaignCard",campaign)

    return (
      //<div>
        <Paper className={classes.paper}>
          <Grid container spacing={1} className="campaign-card">
              <Grid item xs={12} sm={3}>
                  <img className="img-in-Campaign-card"
                        src="https://cdn.vox-cdn.com/thumbor/vjciPYMEQy2ez9UIj_sksSOqC_4=/0x0:1000x667/1200x800/filters:focal(420x253:580x413)/cdn.vox-cdn.com/uploads/chorus_image/image/61171177/01_2013_ALFRED_COFFEE-3.0.0.1412833624.0.jpeg"
                        // src={campaign.image}
                        alt="{campaign.name}"
                  />
              </Grid>

              <Grid item xs={12} sm={6}>
                  <div className="info-in-Campaign-card">
                    <h3>campaign.name</h3>
                    <p>host by: campaign.business.name</p>
                    <p>location: campaign.address campaign.city</p>
                    <p>compensation_type: campaign.compensation_type</p>
                    <p>compensation_market_value:</p>
                    <p>campaign start date: campaign.start_date</p>
                    <p>campaign end date: campaign.end_date</p>
                    <p>apply by: campaign.application_deadline</p>
                    <h4>requirement:</h4>
                    <p>following minium: campaign.require_following_minimum</p>
                    <p>gender: campaign.require_gender</p>
                    <p>others: campaign.require_others</p>
                    <p>details: campaign.description.slice(0,40)</p>
                  </div>
              </Grid>

              <Grid item xs={12} sm={3}>
                  <div className="buttons-in-Campaign-card">
                    <button>See Details</button>
                    <button>Apply</button>
                  </div>
              </Grid>

              <Grid item xs={12} >
                <h5>Campaign Applicants</h5>
                <div className={classes.avatar}>
                  {/* {campaign.applicants.map(c=> <Avatar key={c.id} alt={c.first_name} src={c.profile_pic} />)} */}
                  <Avatar alt="Name" src="" />
                </div>
              </Grid>

              <Grid item xs={12} >
                <h5>Invited Content Creators</h5>
                <div className={classes.avatar}>
                {/* {campaign.invitees.map(c=> <Avatar key={c.id} alt={c.first_name} src={c.profile_pic} />)} */}
                <Avatar alt="Name" src="" />
                </div>
              </Grid>

              <Grid item xs={12} >
                <h5>Hired Content Creators</h5>
                <div className={classes.avatar}>
                {/* {campaign.content_creators.map(c=> <Avatar key={c.id} alt={c.first_name} src={c.profile_pic} />)} */}
                <Avatar alt="Name" src="" />
                </div>
              </Grid>
              
          </Grid>
        </Paper> 
      //</div>

    );
  }