import CampaignCard from "../forms_and_cards/CampaignCard";

import Grid from '@material-ui/core/Grid';

import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

export default function CCHPCampaignList() {
  const dispatch = useDispatch();

  const campaignOnDisplay = useSelector((state) => state.campaignReducer.campaignOnDisplay);
  const needFetchCampaignArr = useSelector((state) => state.campaignReducer.needFetchCampaignArr);


  useEffect(() => {
    fetch("http://localhost:3000/campaigns", 
    ).then((r) => {  
      if (r.ok) {
        r.json().then((campaigns) => {
        // console.log(campaigns)
        dispatch({ type: "SET_CAMPAIGN_ARR", playload: campaigns})
        dispatch({ type: "SET_CAMPAIGN_ON_DISPLAY", playload: campaigns})
        });
      } else {
        alert(r.errors)
      }
    });
  }, [needFetchCampaignArr]);

    return (
        <Grid container spacing={0,5,5,2}>
          {
            campaignOnDisplay.map(c=>  <CampaignCard key={c.id} campaign={c}/>)
          } 
        </Grid>
    );
  }
  