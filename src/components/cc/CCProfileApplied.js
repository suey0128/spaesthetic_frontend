import CampaignCard from "../forms_and_cards/CampaignCard";

import Grid from '@material-ui/core/Grid';


function CCProfileApplied() {

    return (
      <div className="CCProfileApplied">
        <h2>CCProfileApplied</h2>
        <Grid container spacing={1}>
          <CampaignCard/>
        </Grid>
      </div>
    );
  }
  
  export default CCProfileApplied;