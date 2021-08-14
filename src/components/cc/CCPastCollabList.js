import CampaignCard from "../forms_and_cards/CampaignCard";

import Grid from '@material-ui/core/Grid';



function CCPastCollabList() {


    return (
      <div className="CCPastCollabList">
        <h2>CCPastCollabList</h2>
        <Grid container spacing={1}>
          <CampaignCard/>
        </Grid>
      </div>
    );
  }
  
  export default CCPastCollabList;