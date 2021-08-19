import CampaignCard from "../forms_and_cards/CampaignCard";

import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux'


export default function CCCurrentCollabList() {

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const viewingCC = useSelector((state) => state.ccReducer.viewingCC);

  if (currentUser === null && viewingCC === null) return <h2>Loading...</h2>;

  let party;
  if (viewingCC) {
    party = viewingCC
  } else {
    party = currentUser
  }
  console.log(viewingCC)

    return (
      <div className="cc-current-collab-list">
        <h2>CCCurrentCollabList</h2>
        <Grid container spacing={1}>
          {party.current_campaigns.length > 0 ? 
          party.current_campaigns.map(c=> <CampaignCard key={c.id} campaign={c}/>) 
          : 
          <h2>You don't have any current collab</h2>
          }
        </Grid>
      </div>
    );
  }
