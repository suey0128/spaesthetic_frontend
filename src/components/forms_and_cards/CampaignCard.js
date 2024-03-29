import CampaignBtnGroupForCC from './CampaignBtnGroupForCC';
import CampaignBtnGroupForBusiness from './CampaignBtnGroupForBusiness';
import CampaignInfo from './CampaignInfo';
import CampaignImg from './CampaignImg';
import CampaignRelatedCC from './CampaignRelatedCC';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux'


const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius:20,
    width: '100vw',
  },
}));

export default function CampaignCard({ campaign, isOnCCdeatilPageViewingByBusiness, isOnProfile }) {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const viewingCC = useSelector((state) => state.ccReducer.viewingCC);

 if (!campaign ) return <h2>Loading campaign</h2>
 if (!currentUser ) return <h2>Loading campaign</h2>

    return (

      <Grid container spacing={1} >
        <Paper className={classes.paper} xs={12}>
          <Grid container spacing={1} className="campaign-card">

              <CampaignImg campaign={campaign} />

              <CampaignInfo campaign={campaign} 
                            isOnCCdeatilPageViewingByBusiness={isOnCCdeatilPageViewingByBusiness}
                            isOnProfile={isOnProfile}
                            />

              {currentUser.platform_user_type === "ContentCreator" ?
              <CampaignBtnGroupForCC campaign={campaign} 
                                showDetailsBtn={true} 
                                />: null
              }

              {currentUser.platform_user_type === "Business" ?
              <CampaignBtnGroupForBusiness campaign={campaign}
                                            showDetailsBtn={false} 
                                            /> : null
              }

              {currentUser.platform_user_type !== "Business" ?
              null : (
                viewingCC ? 
                null : <CampaignRelatedCC campaign={campaign}/> 
                )
              }
 
          </Grid>
        </Paper> 
      </Grid>


    );
  }