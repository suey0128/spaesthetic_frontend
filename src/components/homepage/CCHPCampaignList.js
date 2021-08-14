import CampaignCard from "../forms_and_cards/CampaignCard";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function CCHPCampaignList() {
  const classes = useStyles();
  const campaignArr = useSelector((state) => state.campaignReducer.campaignArr);



  const dispatch = useDispatch();

  useEffect(() => {
    // auto-login
    fetch("http://localhost:3000/campaigns", 
    // {
    //   credentials: "include"
    // }
    ).then((r) => {  
      if (r.ok) {
        r.json().then((campaigns) => {
        console.log(campaigns)
        dispatch({ type: "SET_CAMPAIGN_ARR", playload: campaigns})
        });
      }
    });
  }, []);

  console.log("campaignArr",campaignArr)

    return (
      <div className="cchp-campaign-list">
        <h2>CCHPCampaignList</h2>
        <Grid container spacing={1}>
          <CampaignCard />
        </Grid>
      </div>
    );
  }
  
  export default CCHPCampaignList;