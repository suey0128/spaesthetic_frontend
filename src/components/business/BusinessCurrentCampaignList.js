import CampaignCard from "../forms_and_cards/CampaignCard";
import Grid from '@material-ui/core/Grid';

function BusinessCurrentCampaignList() {
    return (
      <div className="business-curren-campaign-list">
        <h2>BusinessCurrentCampaignList</h2>
        <Grid container spacing={1}>
          <CampaignCard />
        </Grid>
      </div>
    );
  }
  
  export default BusinessCurrentCampaignList;