import CampaignCard from "../forms_and_cards/CampaignCard";
import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux'

export default function BusinessCurrentCampaignList() {

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const viewingBusiness = useSelector((state) => state.businessReducer.viewingBusiness);

  if (!currentUser === null && viewingBusiness === null) return <h2>Loading...</h2>;

  let party;
  if (viewingBusiness) {
    party = viewingBusiness
  } else {
    party = currentUser
  }

  return (
    <div className="business-curren-campaign-list">
      <h2>BusinessCurrentCampaignList</h2>
      <Grid container spacing={1}>
        {party.current_campaigns.length > 0 ? 
        party.current_campaigns.map(c=> <CampaignCard key={c.id} campaign={c}/>) 
        : 
        <h2>You don't have any current campaign</h2>
        }
      </Grid>
    </div>
  );
}
  
