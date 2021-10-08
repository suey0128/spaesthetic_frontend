import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'


export default function CampaignBtnGroupForCC({ campaign, showDetailsBtn }) {
    const history = useHistory();
    const dispatch = useDispatch();
    //states
    const currentUser = useSelector((state) => state.userReducer.currentUser);
        //decide which btn shows up

    if (!currentUser) return <h2>Loading...</h2>;

    const handleSeeDetailsClick = () => {
        history.push(`/campaigndetail/${campaign.id}`)
    };

    const handleCancelCollabClick = () => {
        //find the collab instance id
        const collabId = campaign.collabs.find(cl=>cl.content_creator_id === currentUser.platform_user_id ).id
        //destory the collab & application instance, change the state
        async function cancelCollab () {
            const res = await fetch (`/collabs/${collabId}`, {method: 'DELETE'});
            if(res.ok){
                dispatch({ type: "NEED_FETCH_USER" })
            };
        };
        cancelCollab();
    };

    const handleWithdrawClick = () => {
        //find the application instance id
        const applicationId = campaign.applications.find(a=>a.content_creator_id === currentUser.platform_user_id).id
        console.log(applicationId)
        //destory the application instance, change the state
        async function withdrawApplication () {
            const res = await fetch (`/applications/${applicationId}`, {method: 'DELETE'});
            if (res.ok) {
                dispatch({ type: "NEED_FETCH_USER" })
            };
        };
        withdrawApplication();
    };

    const handleApplyClick = () => {
        //create the application with currentUser.id & campaign.id
        //create a application instance and update state
        const newApplication = {
            content_creator_id: currentUser.platform_user_id,
            campaign_id: campaign.id
        }
        async function apply() {
            const res = await fetch(`/applications`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(newApplication)
            });
            if (res.ok) {
                const data = await res.json(); // application instance
                console.log('dataFromApply',data)
                dispatch({ type: "NEED_FETCH_USER"})
                dispatch({ type: "NEED_FETCH_CAMPAIGN_ARR"})
                dispatch({ type: "NEED_FETCH_CAMPAIGN"})
            } else {
                const err = await res.json();
                alert(err.errors)
            };
        }
        apply();
    };


    // console.log(campaign)

    return (
        <Grid item xs={12} sm={3}>
            {currentUser.invited_by.find(c=>c.id === campaign.id) ? <p className="invite-msg">you are invited by this campaign❣</p> : null}

            <div className="buttons-in-Campaign-card">

            {new Date(campaign.end_date) > new Date() ? 
            <div>
                {currentUser.current_campaigns.find(c=>c.id === campaign.id) ? 
                    <button onClick={handleCancelCollabClick}>Cancel Collab</button> : 
                    (currentUser.applied_campaigns.find(c=>c.id === campaign.id) ?
                    <button onClick={handleWithdrawClick}>Withdraw Application</button> : 
                    <button onClick={handleApplyClick}>Apply</button>
                    )
                }
            </div> : null
            }
            
            {showDetailsBtn ? <button onClick={handleSeeDetailsClick}>See Details</button> : null}

            </div>
        </Grid>
    );
}




