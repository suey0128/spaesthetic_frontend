import CampaignCard from "../forms_and_cards/CampaignCard";

import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux'


function CCProfileInviteList() {
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  if (currentUser === null) return <h2>Loading...</h2>;
  
    return (
      <div className="CCProfileInviteList">
        <h2>CCProfileInviteList</h2>
        <Grid container spacing={1}>
        {currentUser.invited_by.length > 0 ? 
          currentUser.invited_by.map(c=> <CampaignCard key={c.id} campaignPassedDown={c}/>)
          : 
          <h2>You don't have any campaign that you are invited to</h2>
          }
        </Grid>
      </div>
    );
  }
  
  export default CCProfileInviteList;