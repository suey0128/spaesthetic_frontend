import CampaignCard from "../forms_and_cards/CampaignCard";

import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux'


function CCProfileInviteList() {
  const dispatch = useDispatch();
  
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