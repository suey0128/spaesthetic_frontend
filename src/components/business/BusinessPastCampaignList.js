import CampaignCard from "../forms_and_cards/CampaignCard";

import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux'

export default function BusinessPastCollabList() {

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
      <div className="CCPastCollabList">
        <Grid container spacing={1}>
          {party.past_campaigns.length > 0 ? 
          party.past_campaigns.map(c=> <CampaignCard key={c.id} campaign={c}/>)
          : 
          <h2>There isn't any past campaign</h2>
          }
        </Grid>
      </div>
    );
  }
