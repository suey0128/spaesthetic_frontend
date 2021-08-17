import CampaignBtnGroup from './CampaignBtnGroup';
import CampaignInfo from './CampaignInfo';
import CampaignImg from './CampaignImg';
import CampaignRelatedCC from './CampaignRelatedCC';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CampaignCard({ campaignPassedDown }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const campaign = useSelector((state) => state.campaignReducer.campaign)

  useEffect(() => {
    fetch(`campaigns/${campaignPassedDown.id}`)
    .then(r=>{
      if(r.ok) {
        r.json().then((data) => {
          dispatch({ type: 'SET_CAMPAIGN', playload: data})
        });
      } else {
        alert(r.errors)
      }
    })
  },[])

 if (campaign === null) return <h2>Loading campaign</h2>

    return (
      //<div>
        <Paper className={classes.paper}>
          <Grid container spacing={1} className="campaign-card">

              <CampaignImg campaign={campaign} />

              <CampaignInfo campaign={campaign} />

              <CampaignBtnGroup campaign={campaign}
                                showDetailsBtn={true} 
                                />

              <CampaignRelatedCC campaign={campaign}/>
              
          </Grid>
        </Paper> 
      //</div>

    );
  }