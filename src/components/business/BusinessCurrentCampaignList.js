import CampaignCard from "../forms_and_cards/CampaignCard";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect} from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function BusinessCurrentCampaignList({isOnProfile}) {
  const classes = useStyles();

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const viewingBusiness = useSelector((state) => state.businessReducer.viewingBusiness);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: "SET_IS_ON_LANDING_PAGE", playload: false})
  },[])

  if (currentUser === null && viewingBusiness === null) return <div className={classes.root}><CircularProgress color="secondary" /></div>;


  let party;
  if (viewingBusiness) {
    party = viewingBusiness
  } else {
    party = currentUser
  }

  return (
    <div className={isOnProfile ? null : "business-curren-campaign-list"}>
      {isOnProfile ? null : <h1 style={{ "textAlign" : "center" }}>Current Campaign</h1> }
      <Grid container spacing={1}>
        {party.current_campaigns.length > 0 ? 
        party.current_campaigns.map(c=> <CampaignCard key={c.id} campaign={c} isOnProfile={isOnProfile}/>) 
        : 
        <h2>No current campaign going on</h2>
        }
      </Grid>
    </div>
  );
}
  
