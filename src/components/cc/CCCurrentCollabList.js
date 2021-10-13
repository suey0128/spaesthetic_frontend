import CampaignCard from "../forms_and_cards/CampaignCard";

import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect} from 'react'


export default function CCCurrentCollabList({isOnProfile, isOnCCdeatilPageViewingByBusiness}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SET_IS_ON_LANDING_PAGE", playload: false})
  },[])

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const viewingCC = useSelector((state) => state.ccReducer.viewingCC);

  if (currentUser === null && viewingCC === null) return <h2>Loading...</h2>;

  let party;
  if (viewingCC) {
    party = viewingCC
  } else {
    party = currentUser
  }

    return (
      <div className={isOnProfile ? null : "cc-current-collab-list"}>
        {isOnProfile ? null : <h1 style={{ "textAlign" : "center" }}>Current Collab</h1> }
        <Grid container spacing={1}>
          {party.current_campaigns.length > 0 ? 
          party.current_campaigns.map(c=> <CampaignCard key={c.id} 
                                                        campaign={c} 
                                                        isOnCCdeatilPageViewingByBusiness={isOnCCdeatilPageViewingByBusiness}
                                                        /> )
          : 
          (<h2>There isn't any current collab going on</h2>)
          }
        </Grid>
       </div>
    );
  }
