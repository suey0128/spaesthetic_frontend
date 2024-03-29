import CampaignCard from "../forms_and_cards/CampaignCard";

import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux'

function CCProfileApplied() {

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  if (currentUser === null) return <h2>Loading...</h2>;


    return (
      <div className="CCProfileApplied">
        <Grid container spacing={1}>
        {currentUser.applied_campaigns.length > 0 ? 
          currentUser.applied_campaigns.map(c=> <CampaignCard key={c.id} campaign={c}/>)
          : 
          <h2>You don't have any campaign that you applied to</h2>
          }
        </Grid>
      </div>
    );
  }
  
  export default CCProfileApplied;