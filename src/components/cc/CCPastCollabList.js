import CampaignCard from "../forms_and_cards/CampaignCard";

import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux'

export default function CCPastCollabList({ isOnCCdeatilPageViewingByBusiness }) {

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const viewingCC = useSelector((state) => state.ccReducer.viewingCC);

  if (!currentUser === null && viewingCC === null) return <h2>Loading...</h2>;

  let party;
  if (viewingCC) {
    party = viewingCC
  } else {
    party = currentUser
  }

    return (
      <div className="CCPastCollabList">
        <Grid container spacing={1}>
          {party.past_campaigns.length > 0 ? 
          party.past_campaigns.map(c=> <CampaignCard key={c.id} 
                                                      campaign={c} 
                                                      isOnCCdeatilPageViewingByBusiness={isOnCCdeatilPageViewingByBusiness}
                                                      />)
          : 
          <h2>There isn't any past collab</h2>
          }
        </Grid>
      </div>
    );
  }
