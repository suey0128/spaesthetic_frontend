import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'


export default function CampaignBtnGroupForBusiness({ campaign, showDetailsBtn }) {
    const history = useHistory();
    const dispatch = useDispatch();
    //states
    const currentUser = useSelector((state) => state.userReducer.currentUser);

    if (!campaign) return <h2>Loading...</h2>;
    console.log(campaign);

    const handleCancelCampaign = () => {

        async function cancelCampaign () {
            const res = await fetch (`/campaigns/${campaign.id}`, {method: 'DELETE'});
            if(res.ok){
                dispatch({ type: "NEED_FETCH_USER" })
            };
        };
        cancelCampaign();
    }

    const handleSeeDetailsClick = () => {
        history.push(`/campaigndetail/${campaign.id}`)
    };

    return (
        <Grid item xs={12} sm={3}>

            <div className="buttons-in-Campaign-card">

                {new Date(campaign.end_date) > new Date() && campaign.business_id === currentUser.platform_user_id ? 
                <button onClick={handleCancelCampaign}>Cancel Campaign</button> : null
                }
                
                {showDetailsBtn ? <button onClick={handleSeeDetailsClick}>See Details</button> : null}

            </div>
        </Grid>
    );
}




