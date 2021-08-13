import CampaignCard from "../forms_and_cards/CampaignCard"

import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'


function CCHPCampaignList() {

  const campaignArr = useSelector((state) => state.campaignReducer.campaignArr);



  const dispatch = useDispatch();

  // useEffect(() => {
  //   // auto-login
  //   fetch("http://localhost:3000/campaigns", 
  //   // {
  //   //   credentials: "include"
  //   // }
  //   ).then((r) => {  
  //     if (r.ok) {
  //       r.json().then((campaigns) => {
  //       console.log(campaigns)
  //       dispatch({ type: "SET_CAMPAIGN_ARR", playload: campaigns})
  //       });
  //     }
  //   });
  // }, []);

  console.log("campaignArr",campaignArr)

    return (
      <div className="CCHPCampaignList">
        <h2>CCHPCampaignList</h2>
        <CampaignCard />
      </div>
    );
  }
  
  export default CCHPCampaignList;