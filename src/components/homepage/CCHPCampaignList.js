import CampaignCard from "../forms_and_cards/CampaignCard";

import Grid from '@material-ui/core/Grid';

import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

export default function CCHPCampaignList() {
  const dispatch = useDispatch();

  const campaignArr = useSelector((state) => state.campaignReducer.campaignArr);
  const needFetchCampaignArr = useSelector((state) => state.campaignReducer.needFetchCampaignArr);

  useEffect(() => {
    fetch("http://localhost:3000/campaigns", 
    // {
    //   credentials: "include"
    // }
    ).then((r) => {  
      if (r.ok) {
        r.json().then((campaigns) => {
        // console.log(campaigns)
        dispatch({ type: "SET_CAMPAIGN_ARR", playload: campaigns})
        });
      } else {
        alert(r.errors)
      }
    });
  }, [needFetchCampaignArr]);

  const filteredCampaignArr = campaignArr

  // console.log("filteredCampaignArr",filteredCampaignArr)

    return (
      <div className="cchp-campaign-list">
        <h2>CCHPCampaignList</h2>
        <div>
          <button>Back</button>
          <button>Next</button>
        </div>

        <Grid container spacing={1}>
          {
            filteredCampaignArr.map(c=>  <CampaignCard key={c.id} campaign={c}/>)
          } 
        </Grid>

        <div>
          <button>Back</button>
          <button>Next</button>
        </div>
      </div>
    );
  }
  