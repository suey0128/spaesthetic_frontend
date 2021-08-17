import CampaignCard from "../forms_and_cards/CampaignCard";

import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux'

function CCPastCollabList() {

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  if (currentUser === null) return <h2>Loading...</h2>;

    return (
      <div className="CCPastCollabList">
        <h2>CCPastCollabList</h2>
        <Grid container spacing={1}>
          {currentUser.past_campaigns.length > 0 ? 
          currentUser.past_campaigns.map(c=> <CampaignCard key={c.id} campaignPassedDown={c}/>)
          : 
          <h2>You don't have any past collab</h2>
          }
        </Grid>
      </div>
    );
  }
  
  export default CCPastCollabList;