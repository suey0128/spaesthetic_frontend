import CampaignCard from "../forms_and_cards/CampaignCard";

import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux'


function CCCurrentCollabList() {

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  if (currentUser === null) return <h2>Loading...</h2>;

    return (
      <div className="cc-current-collab-list">
        <h2>CCCurrentCollabList</h2>
        <Grid container spacing={1}>
          {currentUser.current_campaigns.length > 0 ? 
          currentUser.current_campaigns.map(c=> <CampaignCard key={c.id} campaignPassedDown={c}/>) 
          : 
          <h2>You don't have any current collab</h2>
          }
        </Grid>
      </div>
    );
  }
  
  export default CCCurrentCollabList;