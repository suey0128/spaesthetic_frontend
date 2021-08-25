import CampaignBtnGroupForCC from './forms_and_cards/CampaignBtnGroupForCC';
import CampaignBtnGroupForBusiness from './forms_and_cards/CampaignBtnGroupForBusiness';
import CampaignInfo from './forms_and_cards/CampaignInfo';
import CampaignImg from './forms_and_cards/CampaignImg';
import CampaignRelatedCC from './forms_and_cards/CampaignRelatedCC';

import React from 'react';
import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CampaginDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  // console.log (params) //=>{id:1}

  const [isLoaded, setIsLoaded] = useState(false)
  const campaign = useSelector((state) => state.campaignReducer.campaign)
  const needFetchCampaign = useSelector((state) => state.campaignReducer.needFetchCampaign)
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  //fetch campaign base on the id from the params
  useEffect(() => {
    async function fetchCampaign(){
      const res = await fetch (`/campaigns/${params.id}`)
      if (res.ok){
        const data = await res.json()
        dispatch({ type: "SET_CAMPAIGN", playload:data })
        setIsLoaded(true)
      }
    };
    fetchCampaign();
  },[needFetchCampaign])

  if (!isLoaded ) return <h2>Loading...</h2>;
  if (!currentUser ) return <h2>Loading...</h2>;
  console.log(campaign)



  return (

    <Grid container spacing={1} className="campaign-detail-container">
      
      <CampaignImg campaign={campaign} />

      <CampaignInfo campaign={campaign} />
      

              {currentUser.platform_user_type === "ContentCreator" ?
              <CampaignBtnGroupForCC campaign={campaign} 
                                showDetailsBtn={false} 
                                />: null
              }

              {currentUser.platform_user_type === "Business" ?
              <CampaignBtnGroupForBusiness campaign={campaign}
                                            showDetailsBtn={false}  
                                            /> : null
              }

              {currentUser.platform_user_type === "Business" ?
              <CampaignRelatedCC campaign={campaign}/> : null
              }

      {/* <button onClick={()=>{history.push('/campaignform')}}>Edit</button> */}
    </Grid>
  );
}