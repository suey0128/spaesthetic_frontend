import CampaignCard from "../forms_and_cards/CampaignCard";
import Grid from '@material-ui/core/Grid';

function BusinessPastCampaignList() {
    return (
      <div className="BusinessPastCampaignList">
        <h2>BusinessPastCampaignList</h2>
        <Grid container spacing={1}>
          <CampaignCard />
        </Grid>
      </div>
    );
  }
  
  export default BusinessPastCampaignList;