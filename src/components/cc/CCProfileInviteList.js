import CampaignCard from "../forms_and_cards/CampaignCard";

import Grid from '@material-ui/core/Grid';


function CCProfileInviteList() {
    return (
      <div className="CCProfileInviteList">
        <h2>CCProfileInviteList</h2>
        <Grid container spacing={1}>
        <CampaignCard />
        </Grid>
      </div>
    );
  }
  
  export default CCProfileInviteList;